import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import MobileBottomNav from '../components/layout/MobileBottomNav'
import ArticleSidebar from './ArticleSidebar'
import VideoPlayer from '../components/video/VideoPlayer'
import VideoCard from '../components/video/VideoCard'
import { useToast } from '../components/useToast'
import { usePreferences } from '../context/usePreferences'
import { getVideo, getRelatedVideos } from '../data/videos'
import {
  loadSavedVideoSlugs,
  saveVideoSlug,
  loadVideoComments,
  saveVideoComments,
  type Comment,
} from '../utils/storage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function formatTime(ts: number): string {
  return new Date(ts).toLocaleString(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  })
}

function ActionButton({
  onClick,
  label,
  active,
  children,
}: {
  onClick: () => void
  label: string
  active?: boolean
  children: ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-pressed={active ?? undefined}
      className="h-[36px] px-[18px] bg-[#f4f4f4] dark:bg-[#2a2a2a] text-[#000000] dark:text-[#e8e8e8] font-['Inter'] font-normal text-[14px] leading-[36px] rounded-[4px] cursor-pointer border-none flex items-center gap-[6px] hover:bg-[#e8e8e8] dark:hover:bg-[#333333] active:bg-[#dbdbdb]"
    >
      {children}
    </button>
  )
}

export default function VideoPage() {
  const { slug } = useParams<{ slug: string }>()
  const video = slug ? getVideo(slug) : undefined
  const { showToast } = useToast()
  const { t } = usePreferences()

  const [saved, setSaved] = useState(false)
  const [comments, setComments] = useState<Comment[]>([])
  const [draft, setDraft] = useState('')

  useEffect(() => {
    if (!video) return
    setSaved(loadSavedVideoSlugs().includes(video.slug))
    setComments(loadVideoComments(video.slug))
    setDraft('')
  }, [video])

  const commentCount = comments.length
  const related = video ? getRelatedVideos(video.slug) : []
  const latestCommentId = useMemo(() => comments[comments.length - 1]?.id ?? '', [comments])

  const toggleSave = () => {
    if (!video) return
    const next = !saved
    setSaved(next)
    saveVideoSlug(video.slug, next)
    showToast(next ? t('videoSaved') : t('videoRemoved'))
  }

  const handleShare = async () => {
    if (!video) return
    const url = window.location.href
    const title = video.title
    if (typeof navigator.share === 'function') {
      try {
        await navigator.share({ title, url })
        return
      } catch {
        // user cancelled or share failed — fall through quietly
      }
    }
    try {
      await navigator.clipboard.writeText(url)
      showToast(t('linkCopied'))
    } catch {
      // clipboard unavailable
    }
  }

  const handlePostComment = (e: FormEvent) => {
    e.preventDefault()
    if (!video) return
    const text = draft.trim()
    if (!text) return
    const next: Comment[] = [
      ...comments,
      {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        text,
        createdAt: Date.now(),
        author: 'Guest',
      },
    ]
    setComments(next)
    saveVideoComments(video.slug, next)
    setDraft('')
  }

  const handleDeleteComment = (id: string) => {
    if (!video) return
    const next = comments.filter((c) => c.id !== id)
    setComments(next)
    saveVideoComments(video.slug, next)
  }

  return (
    <>
      <ScrollToTop />
      <PageLayout>
          {!video ? (
            <div className="max-w-[1440px] mx-auto">
              <p className="video-page video-not-found text-[#000000a6] dark:text-[#b0b0b0] font-['Hind_Vadodara'] font-normal text-[16px]">
                {t('videoNotFound')}
              </p>
              <Link
                to="/"
                className="inline-block mt-[16px] h-[36px] px-[18px] bg-[#1302ff] text-[#ffffff] font-['Inter'] font-normal text-[14px] leading-[36px] rounded-[4px] no-underline"
              >
                {t('home')}
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row lg:gap-[40px] max-w-[1440px] mx-auto max-lg:gap-[24px]">
              <article className="video-page flex-1 min-w-0">
                <VideoPlayer video={video} />

                <span className="category-badge inline-block mt-[24px] text-[#1302ff] font-['Inter'] font-bold text-[14px] tracking-[0.08em] uppercase">
                  {video.category}
                </span>

                <h1 className="mt-[12px] text-[#000000] dark:text-[#f2f2f2] font-['Rasa'] font-bold text-[36px] leading-[1.25] max-lg:text-[26px]">
                  {video.title}
                </h1>

                <div className="video-meta mt-[14px] flex flex-col sm:flex-row sm:items-center gap-[6px] text-[#000000a6] dark:text-[#b0b0b0] font-['Hind_Vadodara'] font-normal text-[14px]">
                  <span>{video.date}</span>
                  {video.duration && (
                    <>
                      <span className="hidden sm:inline text-[#000000a6] dark:text-[#b0b0b0]">|</span>
                      <span>{video.duration}</span>
                    </>
                  )}
                </div>

                {video.description && (
                  <p className="video-description mt-[18px] text-[#000000] dark:text-[#e8e8e8] font-['Hind_Vadodara'] font-normal text-[16px] leading-[1.6]">
                    {video.description}
                  </p>
                )}

                <div className="action-bar mt-[28px] flex flex-wrap items-center gap-[12px]">
                  <ActionButton
                    onClick={toggleSave}
                    label={saved ? t('saved') : t('saveVideo')}
                    active={saved}
                  >
                    <span aria-hidden="true">{saved ? '♥' : '♡'}</span>
                    <span>{saved ? t('saved') : t('saveVideo')}</span>
                  </ActionButton>
                  <ActionButton onClick={handleShare} label={t('shareVideo')}>
                    <span aria-hidden="true">📤</span>
                    <span>{t('share')}</span>
                  </ActionButton>
                  <ActionButton
                    onClick={() => {
                      const el = document.getElementById('video-comments')
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }}
                    label={t('jumpToComments')}
                  >
                    <span aria-hidden="true">💬</span>
                    <span>{commentCount > 0 ? `${t('comments')} (${commentCount})` : t('comments')}</span>
                  </ActionButton>
                </div>

                <section
                  id="video-comments"
                  aria-label={t('comments')}
                  className="comments-area mt-[36px]"
                >
                  <h3 className="text-[#000000] dark:text-[#f2f2f2] font-['Rasa'] font-bold text-[19px] lg:text-[22px]">
                    {t('commentsHeading')}
                  </h3>

                  <form onSubmit={handlePostComment} className="mt-[14px] flex flex-col gap-[10px] max-w-[640px]">
                    <label htmlFor="video-comment-input" className="sr-only">
                      {t('writeComment')}
                    </label>
                    <textarea
                      id="video-comment-input"
                      value={draft}
                      onChange={(e) => setDraft(e.target.value)}
                      placeholder={t('writeComment')}
                      rows={3}
                      aria-label={t('writeComment')}
                      className="w-full resize-y px-[12px] py-[10px] bg-[#ffffff] dark:bg-[#1a1a1a] border border-[#d9d9d9] dark:border-[#3a3a3a] text-[#000000] dark:text-[#e8e8e8] font-['Hind_Vadodara'] font-normal text-[15px] rounded-[4px] outline-none focus:border-[#1302ff]"
                    />
                    <div className="flex flex-wrap items-center gap-[12px]">
                      <button
                        type="submit"
                        disabled={!draft.trim()}
                        aria-label={t('postComment')}
                        className="h-[36px] px-[18px] bg-[#1302ff] text-[#ffffff] font-['Inter'] font-normal text-[14px] leading-[36px] rounded-[4px] cursor-pointer border-none disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {t('postComment')}
                      </button>
                    </div>
                  </form>

                  {comments.length > 0 && (
                    <ul className="mt-[20px] flex flex-col max-w-[640px]">
                      {comments.map((c) => (
                        <li
                          key={c.id}
                          className={`flex flex-col gap-[4px] py-[14px] border-b border-[#e8e8e8] dark:border-[#2e2e2e] ${
                            c.id === latestCommentId ? 'bg-[#faf8ff] dark:bg-[#1c1c1c]' : ''
                          }`}
                        >
                          <div className="flex flex-wrap items-center gap-[10px]">
                            <span className="comment-author text-[#1302ff] font-['Inter'] font-bold text-[13px]">
                              {c.author}
                            </span>
                            <span className="comment-time text-[#000000a6] dark:text-[#b0b0b0] font-['Inter'] font-normal text-[12px]">
                              {formatTime(c.createdAt)}
                            </span>
                          </div>
                          <p className="comment-text text-[#000000] dark:text-[#e8e8e8] font-['Hind_Vadodara'] font-normal text-[15px] leading-[1.5]">
                            {c.text}
                          </p>
                          <div className="flex">
                            <button
                              type="button"
                              onClick={() => handleDeleteComment(c.id)}
                              aria-label={t('delete')}
                              className="text-[#1302ff] font-['Inter'] font-normal text-[12px] cursor-pointer border-none bg-transparent p-0 hover:underline"
                            >
                              {t('delete')}
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}

                  {comments.length === 0 && (
                    <p className="comment-empty mt-[16px] text-[#000000a6] dark:text-[#b0b0b0] font-['Hind_Vadodara'] font-normal text-[14px]">
                      {t('noComments')}
                    </p>
                  )}
                </section>

                {related.length > 0 && (
                  <div className="mt-[40px]">
                    <h3 className="video-related-heading text-[#000000] dark:text-[#f2f2f2] font-['Rasa'] font-bold text-[19px] lg:text-[22px]">
                      {t('relatedVideos')}
                    </h3>
                    <div className="mt-[14px] max-sm:flex max-sm:gap-[12px] max-sm:overflow-x-auto max-sm:snap-x max-sm:scrollbar-width-none max-sm:[&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-[20px]">
                      {related.map((v) => (
                        <VideoCard key={v.slug} video={v} />
                      ))}
                    </div>
                  </div>
                )}
              </article>

              <div className="mt-[48px] lg:mt-[0px] lg:shrink-0 max-lg:hidden">
                <ArticleSidebar />
              </div>
            </div>
          )}
        </PageLayout>
        <MobileBottomNav />
    </>
  )
}