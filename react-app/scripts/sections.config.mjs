// Maps each top-level child of v69_116 (in DOM order) to a component
// folder + name. Used by convert-html.mjs to emit per-section components.
//
// `id` is the figma class id (for verification), `folder` + `name` control
// where the component file is written and how it is imported in App.tsx.
// The array index MUST match the DOM order of the children of v69_116.

export const sections = [
  { id: 'v47_86',   folder: 'layout',   name: 'Header' },                 // 0  logo + nav menu
  { id: 'v47_128',  folder: 'sections', name: 'BreakingHeadline' },       // 1
  { id: 'v47_145',  folder: 'sections', name: 'CanadaStory' },            // 2
  { id: 'v47_156',  folder: 'sections', name: 'CricketStory' },           // 3
  { id: 'v47_167',  folder: 'sections', name: 'CricketStory2' },          // 4
  { id: 'v47_178',  folder: 'sections', name: 'EntertainmentStory' },     // 5
  { id: 'v47_197',  folder: 'sections', name: 'HealthSection' },          // 6
  { id: 'v47_244',  folder: 'sections', name: 'WebStories' },             // 7
  { id: 'v47_283',  folder: 'sections', name: 'IndiaNews' },              // 8
  { id: 'v47_386',  folder: 'sections', name: 'EntertainmentBlock' },     // 9
  { id: 'v47_449',  folder: 'sections', name: 'CanadaStory2' },           // 10
  { id: 'v47_484',  folder: 'sections', name: 'CanadaStory3' },           // 11
  { id: 'v47_498',  folder: 'widgets',  name: 'AdSlot498' },              // 12 spacer
  { id: 'v47_499',  folder: 'widgets',  name: 'AdSlot499' },              // 13 spacer
  { id: 'v47_500',  folder: 'widgets',  name: 'AdSlot500' },              // 14 spacer
  { id: 'v47_501',  folder: 'sections', name: 'GujaratSection' },         // 15
  { id: 'v47_531',  folder: 'sections', name: 'EntertainmentBlock2' },    // 16
  { id: 'v47_559',  folder: 'widgets',  name: 'CelebrityCard' },          // 17
  { id: 'v47_576',  folder: 'sections', name: 'EducationSection' },       // 18
  { id: 'v47_603',  folder: 'widgets',  name: 'FashionWidget' },          // 19
  { id: 'v47_627',  folder: 'sections', name: 'RecipeSection' },          // 20
  { id: 'v47_659',  folder: 'sections', name: 'PodcastSection' },         // 21
  { id: 'v47_684',  folder: 'sections', name: 'MyCitySection' },          // 22
  { id: 'v47_718',  folder: 'layout',   name: 'Footer' },                 // 23
  { id: 'v47_741',  folder: 'sections', name: 'EntertainmentFeature' },   // 24
  { id: 'v47_833',  folder: 'sections', name: 'HealthSection2' },         // 25
  { id: 'v47_897',  folder: 'layout',   name: 'Ticker' },                 // 26 breaking-news ticker
  { id: null,       folder: 'widgets',  name: 'PlaceholderSpacer' },      // 27 <div className="text-[#fff]" />
  { id: 'v47_929',  folder: 'widgets',  name: 'EPaperWidget' },           // 28
  { id: 'v47_941',  folder: 'widgets',  name: 'OpinionWidget' },          // 29
  { id: 'v47_971',  folder: 'widgets',  name: 'MarketWidget' },           // 30
  { id: 'v47_992',  folder: 'widgets',  name: 'CricketScores' },          // 31
  { id: 'v47_1037', folder: 'widgets',  name: 'LiveCricketWidget' },      // 32
  { id: null,       folder: 'widgets',  name: 'PlaceholderBox' },         // 33 gray box
  { id: 'v47_1125', folder: 'widgets',  name: 'GamesWidget' },            // 34
  { id: 'v47_1151', folder: 'widgets',  name: 'AapniAajWidget' },         // 35
  { id: 'v47_1159', folder: 'widgets',  name: 'DateBar' },                // 36
  { id: 'v47_1180', folder: 'widgets',  name: 'PollWidget' },             // 37
  { id: 'v47_1211', folder: 'widgets',  name: 'PollWidget2' },            // 38
]
