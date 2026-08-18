import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from 'react'
import { useParams, Navigate, useLocation } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import MobileBottomNav from '../components/layout/MobileBottomNav'
import ArticleSidebar from './ArticleSidebar'
import { useToast } from '../components/useToast'
import { usePreferences } from '../context/usePreferences'
import { getArticle } from '../data/articles'
import { fetchArticleBySlug } from '../services/api'
import {
  loadSavedSlugs,
  saveSlug,
  loadComments,
  saveComments,
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

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const [article, setArticle] = useState<ReturnType<typeof getArticle>>(() =>
    slug ? getArticle(slug) : undefined,
  )
  const { showToast } = useToast()
  const { t } = usePreferences()

  const [saved, setSaved] = useState(false)
  const [comments, setComments] = useState<Comment[]>([])
  const [draft, setDraft] = useState('')

  useEffect(() => {
    let active = true
    if (!slug) return
    fetchArticleBySlug(slug).then((row) => {
      if (active && row) setArticle(row)
    })
    return () => {
      active = false
    }
  }, [slug])

  useEffect(() => {
    if (!article) return
    setSaved(loadSavedSlugs().includes(article.slug))
    setComments(loadComments(article.slug))
    setDraft('')
  }, [article])

  const commentCount = comments.length

  const toggleSave = () => {
    if (!article) return
    const next = !saved
    setSaved(next)
    saveSlug(article.slug, next)
    showToast(next ? t('articleSaved') : t('articleRemoved'))
  }

  const handleShare = async () => {
    if (!article) return
    const url = window.location.href
    const title = article.title
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
    if (!article) return
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
    saveComments(article.slug, next)
    setDraft('')
  }

  const handleDeleteComment = (id: string) => {
    if (!article) return
    const next = comments.filter((c) => c.id !== id)
    setComments(next)
    saveComments(article.slug, next)
  }

  const latestCommentId = useMemo(() => comments[comments.length - 1]?.id ?? '', [comments])

  if (!article) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <ScrollToTop />
      <PageLayout>
        <div className="flex flex-col lg:flex-row lg:gap-[40px] max-w-[1440px] mx-auto max-lg:gap-[24px]">
            <article className="article-page flex-1 min-w-0">
              <span className="category-badge inline-block text-[#1302ff] font-['Inter'] font-bold text-[14px] tracking-[0.08em] uppercase">
                {article.category}
              </span>

              <h1 className="mt-[12px] text-[#000000] dark:text-[#f2f2f2] font-['Rasa'] font-bold text-[36px] leading-[1.25] max-lg:text-[26px]">
                {article.title}
              </h1>

              <div className="article-meta mt-[14px] flex flex-col sm:flex-row sm:items-center gap-[6px] text-[#000000a6] dark:text-[#b0b0b0] font-['Hind_Vadodara'] font-normal text-[14px]">
                <span className="text-[#000000] dark:text-[#e8e8e8]">By {article.author}</span>
                <span className="hidden sm:inline text-[#000000a6] dark:text-[#b0b0b0]">|</span>
                <span>Posted on {article.date}</span>
              </div>

              <div className="mt-[28px] w-full">
                <img
                  src={article.image}
                  alt={article.imageAlt}
                  className="w-full h-auto block"
                />
              </div>

              <div className="article-body mt-[28px] flex flex-col gap-[18px]">
                {article.content.map((block, i) =>
                  block.type === 'heading' ? (
                    <h2
                      key={i}
                      className="mt-[10px] text-[#000000] dark:text-[#f2f2f2] font-['Rasa'] font-bold text-[23px] lg:text-[28px] leading-[1.3]"
                    >
                      {block.text}
                    </h2>
                  ) : (
                    <p
                      key={i}
                      className="text-[#000000] dark:text-[#e8e8e8] font-['Rasa'] font-normal text-[18px] lg:text-[20px] leading-[1.55]"
                    >
                      {block.text}
                    </p>
                  ),
                )}
              </div>

              <div className="related-items mt-[36px]">
                <h3 className="text-[#000000] dark:text-[#f2f2f2] font-['Rasa'] font-bold text-[19px] lg:text-[22px]">
                  RELATED ITEMS:
                </h3>
                <div className="mt-[10px] flex flex-wrap gap-[8px]">
                  {article.related.map((tag) => (
                    <span
                      key={tag}
                      className="px-[12px] h-[28px] bg-[#f4f4f4] dark:bg-[#2a2a2a] text-[#000000] dark:text-[#e8e8e8] font-['Inter'] font-normal text-[12px] leading-[28px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="action-bar mt-[32px] flex flex-wrap items-center gap-[12px]">
                <ActionButton onClick={toggleSave} label={saved ? t('saved') : t('save')} active={saved}>
                  <span aria-hidden="true">{saved ? '♥' : '♡'}</span>
                  <span>{saved ? t('saved') : t('save')}</span>
                </ActionButton>
                <ActionButton onClick={handleShare} label={t('share')}>
                  <span aria-hidden="true">📤</span>
                  <span>{t('share')}</span>
                </ActionButton>
                <ActionButton
                  onClick={() => {
                    const el = document.getElementById('article-comments')
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                  label={t('jumpToComments')}
                >
                  <span aria-hidden="true">💬</span>
                  <span>{commentCount > 0 ? `${t('comments')} (${commentCount})` : t('comments')}</span>
                </ActionButton>
              </div>

              <section
                id="article-comments"
                aria-label={t('comments')}
                className="comments-area mt-[36px]"
              >
                <h3 className="text-[#000000] dark:text-[#f2f2f2] font-['Rasa'] font-bold text-[19px] lg:text-[22px]">
                  {t('commentsHeading')}
                </h3>

                <form onSubmit={handlePostComment} className="mt-[14px] flex flex-col gap-[10px] max-w-[640px]">
                  <label htmlFor="comment-input" className="sr-only">
                    {t('writeComment')}
                  </label>
                  <textarea
                    id="comment-input"
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
            </article>

            <div className="mt-[48px] lg:mt-[0px] lg:shrink-0 max-lg:hidden">
              <ArticleSidebar />
            </div>
          </div>
        </PageLayout>
        <MobileBottomNav />
    </>
  )
}