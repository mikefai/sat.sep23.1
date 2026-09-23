const passages = [
  {
    id: 'trees', title: 'City Trees, Cooler Days', domain: 'Environmental science',
    lines: [
      'Cities are often several degrees hotter than nearby rural areas, a phenomenon known as the urban heat island effect.',
      'Trees cool streets by shading heat-absorbing surfaces and by releasing water vapor through transpiration.',
      'A study across three U.S. cities found that neighborhoods with more tree cover were 2–4°F cooler on summer afternoons than similar neighborhoods with little tree cover.',
      'The same trees can also capture stormwater and filter some airborne pollutants.',
      'Researchers caution that tree planting works best alongside reflective roofs and other heat-reduction strategies.'
    ],
    tasks: [
      ['urban trees can measurably reduce neighborhood temperatures', 2, 'The sentence reports a measured temperature difference, making it direct empirical support.'],
      ['trees cool cities in more than one way', 1, 'The sentence names two mechanisms: shade and transpiration.'],
      ['trees provide benefits beyond temperature reduction', 3, 'Stormwater capture and pollutant filtering are benefits separate from cooling.'],
      ['tree planting should be part of a broader response to urban heat', 4, 'This sentence explicitly says planting works best with other strategies.'],
      ['urban areas can be warmer than their surroundings', 0, 'This sentence directly defines the urban heat island effect and compares cities with rural areas.']
    ]
  },
  {
    id: 'sleep', title: 'The Work of Sleep', domain: 'Behavioral science',
    lines: [
      'Sleep was once described as a period when the brain simply shut down, but modern research presents a more active picture.',
      'During deep sleep, the brain strengthens some newly formed memories while allowing less useful details to fade.',
      'In one experiment, participants who slept after learning a finger-tapping sequence performed it 20 percent faster the next morning.',
      'Insufficient sleep can also make it harder to regulate attention and emotional reactions.',
      'Scientists still debate exactly how different sleep stages divide the work of memory processing.'
    ],
    tasks: [
      ['sleep can improve performance on a newly learned physical skill', 2, 'The experiment connects sleep with a specific, measured gain in performance.'],
      ['sleep supports the organization of memories', 1, 'The sentence directly describes strengthening some memories and letting other details fade.'],
      ['the scientific view of sleep has changed', 0, 'This contrasts an older passive view with current research.'],
      ['too little sleep can affect more than memory', 3, 'Attention and emotional regulation are distinct from memory.'],
      ['questions about the functions of sleep remain unresolved', 4, 'The phrase “still debate” directly signals ongoing uncertainty.']
    ]
  },
  {
    id: 'pollinators', title: 'Farms for Wild Bees', domain: 'Ecology',
    lines: [
      'Many crops depend on animal pollinators, yet large fields can offer wild bees little food once a crop stops flowering.',
      'Some farmers plant narrow strips of native flowers along field edges to provide nectar throughout the growing season.',
      'Across twenty farms, fields beside flower strips hosted twice as many wild bee species as fields without the strips.',
      'The strips take a small amount of land out of production and require maintenance during their first years.',
      'Researchers are testing which mixes of native plants deliver the greatest benefit in different regions.'
    ],
    tasks: [
      ['flower strips may increase wild bee diversity on farms', 2, 'The comparison reports twice as many bee species beside flower strips.'],
      ['farm landscapes may not feed pollinators all season', 0, 'The sentence says food becomes scarce after crop flowering ends.'],
      ['farmers use native plants to extend food availability for bees', 1, 'This sentence directly states both the action and its purpose.'],
      ['adding flower strips involves a trade-off for farmers', 3, 'It identifies land and maintenance costs alongside the ecological aim.'],
      ['the best flower-strip design may depend on location', 4, 'Testing different mixes in different regions implies local variation matters.']
    ]
  },
  {
    id: 'libraries', title: 'Libraries of Things', domain: 'Social science',
    lines: [
      'A growing number of public libraries lend tools, sewing machines, and cooking equipment in addition to books.',
      'Supporters say these collections let residents complete occasional projects without buying objects they may rarely use.',
      'In a survey of one tool-lending program, 68 percent of borrowers said cost had previously kept them from starting a repair.',
      'Staff members note that unusual items require safety instructions, storage space, and more frequent inspection.',
      'Even so, several libraries report that non-book collections bring in residents who had not used other library services.'
    ],
    tasks: [
      ['tool-lending programs can reduce a financial barrier to home repairs', 2, 'The survey directly links cost barriers with borrowers’ delayed repairs.'],
      ['some libraries now lend objects beyond traditional media', 0, 'The sentence lists tools and equipment alongside books.'],
      ['borrowing can be practical for items used only occasionally', 1, 'The sentence directly contrasts borrowing with buying rarely used objects.'],
      ['non-book collections create operational demands', 3, 'Safety, storage, and inspection are concrete operational requirements.'],
      ['new collections may connect libraries with new users', 4, 'The sentence specifically mentions residents who had not used other services.']
    ]
  },
  {
    id: 'coral', title: 'Listening to Coral Reefs', domain: 'Marine biology',
    lines: [
      'Healthy coral reefs are noisy places, filled with clicks, pops, and scraping sounds made by fish and invertebrates.',
      'Young fish use some of these sounds as cues when choosing where to settle after drifting in open water.',
      'Researchers placed underwater speakers near damaged reefs and played recordings from healthy reefs for six weeks.',
      'The reefs with playback attracted about twice as many juvenile fish as comparable sites without the recordings.',
      'Sound alone cannot restore coral, but it may help rebuild fish communities while habitat repairs take effect.'
    ],
    tasks: [
      ['recordings of healthy reefs can attract young fish to damaged sites', 3, 'The controlled comparison reports twice as many juvenile fish at playback sites.'],
      ['reef sound can influence where young fish settle', 1, 'This sentence directly describes sound as a settlement cue.'],
      ['a healthy reef has a recognizable soundscape', 0, 'The sentence characterizes healthy reefs by their many biological sounds.'],
      ['researchers tested sound playback in real reef environments', 2, 'It describes speakers placed near damaged reefs for six weeks.'],
      ['acoustic methods are a supplement, not a complete restoration solution', 4, 'The phrase “sound alone cannot restore coral” sets a clear limit.']
    ]
  },
  {
    id: 'translation', title: 'A Poem in Another Language', domain: 'Literary studies',
    lines: [
      'Translating a poem involves more than replacing each word with its dictionary equivalent.',
      'A translator must weigh meaning against rhythm, sound, cultural association, and the shape of each line.',
      'Keeping a rhyme may require changing an image, while preserving an image may force the rhyme to disappear.',
      'For this reason, two careful translations of the same poem can differ sharply without either being careless.',
      'Reading several translations side by side can reveal the choices hidden inside each apparently simple line.'
    ],
    tasks: [
      ['poetic translation requires balancing competing priorities', 1, 'The sentence lists several elements a translator must weigh against one another.'],
      ['word-for-word substitution is inadequate for translating poetry', 0, 'This sentence explicitly rejects translation as simple word replacement.'],
      ['preserving one poetic feature can require sacrificing another', 2, 'The rhyme-and-image example directly demonstrates the trade-off.'],
      ['different translations can both be thoughtful', 3, 'The sentence says substantial differences do not necessarily indicate carelessness.'],
      ['comparing translations can make translators’ decisions visible', 4, 'This sentence states that side-by-side reading reveals hidden choices.']
    ]
  },
  {
    id: 'batteries', title: 'A Second Life for Batteries', domain: 'Technology',
    lines: [
      'An electric-vehicle battery may no longer meet the demands of driving even when it retains most of its storage capacity.',
      'Engineers can combine these used batteries into stationary systems that store electricity for buildings or power grids.',
      'A pilot system built from retired vehicle batteries supplied a small office with backup power for nearly four hours.',
      'Before reuse, each battery must be tested because age, temperature, and driving history affect its condition.',
      'Eventually the batteries still need recycling, so reuse delays rather than eliminates the end-of-life problem.'
    ],
    tasks: [
      ['retired vehicle batteries can still provide useful energy storage', 2, 'The pilot system gives a specific demonstration of continued usefulness.'],
      ['a battery can become unsuitable for driving before losing most capacity', 0, 'The sentence directly distinguishes driving demands from remaining capacity.'],
      ['used vehicle batteries can be repurposed for stationary applications', 1, 'This names the new use in buildings and grids.'],
      ['battery reuse requires individual assessment', 3, 'The need to test each battery directly supports individual evaluation.'],
      ['reuse postpones but does not remove the need for recycling', 4, 'The sentence states this limitation almost word for word.']
    ]
  },
  {
    id: 'maps', title: 'Maps Made from Memory', domain: 'Cognitive science',
    lines: [
      'When people draw a familiar city from memory, their maps often simplify winding roads and irregular blocks.',
      'They also tend to enlarge landmarks that feel important, even when those landmarks occupy little physical space.',
      'In one study, participants placed frequently visited cafés closer to home than equally distant buildings they rarely entered.',
      'These distortions do not mean that mental maps are useless; they may emphasize information most relevant to daily decisions.',
      'Digital navigation can reduce the need to build such maps, though researchers disagree about the long-term effects.'
    ],
    tasks: [
      ['familiarity can distort perceived distance', 2, 'The study holds actual distance constant while reported placement changes with visitation.'],
      ['mental maps often regularize complex physical layouts', 0, 'Simplifying winding roads and irregular blocks directly shows regularization.'],
      ['subjective importance affects the size of remembered landmarks', 1, 'The sentence links felt importance with enlargement.'],
      ['distortion can make a mental map more useful for everyday life', 3, 'It explains that distortions may prioritize decision-relevant information.'],
      ['the cognitive effects of digital navigation are not yet settled', 4, 'Researchers’ disagreement is direct evidence of an unsettled question.']
    ]
  },
  {
    id: 'music', title: 'Rebuilding an Old Instrument', domain: 'History of music',
    lines: [
      'Only fragments survive of many instruments played in ancient societies, leaving their original sound uncertain.',
      'Researchers combine archaeological measurements, images in art, and descriptions in written sources to design reconstructions.',
      'A reconstructed instrument can test whether a proposed hand position or playing technique is physically possible.',
      'Its sound, however, also depends on modern choices about materials and construction that ancient makers may not have shared.',
      'Scholars therefore treat reconstructions as experiments that generate questions rather than perfect copies of the past.'
    ],
    tasks: [
      ['instrument reconstructions can test ideas about historical performance', 2, 'The sentence describes testing the physical possibility of techniques.'],
      ['evidence about ancient instruments is incomplete', 0, 'The survival of fragments and uncertainty about sound directly establish incompleteness.'],
      ['reconstruction draws on several kinds of evidence', 1, 'The sentence lists measurements, art, and written descriptions.'],
      ['modern construction decisions limit claims about authentic sound', 3, 'The sentence connects sound with choices ancient makers may not have shared.'],
      ['scholars view reconstructions as investigative tools', 4, 'Calling them experiments that generate questions directly supports this view.']
    ]
  },
  {
    id: 'parks', title: 'Small Parks, Local Effects', domain: 'Urban studies',
    lines: [
      'Large parks receive attention, but small “pocket parks” can fit into vacant lots within dense neighborhoods.',
      'Because they are close to homes and shops, these parks may be used for brief visits rather than planned outings.',
      'Observers at twelve pocket parks recorded the highest use at sites with both shade and movable seating.',
      'A small park cannot provide every recreational facility, and poor maintenance can quickly discourage visitors.',
      'Designers argue that a network of small spaces can complement, rather than replace, a city’s larger parks.'
    ],
    tasks: [
      ['shade and flexible seating may encourage pocket-park use', 2, 'The observations associate the highest use with those two features.'],
      ['small parks can occupy spaces unavailable to large parks', 0, 'The sentence notes that pocket parks fit into vacant lots in dense areas.'],
      ['proximity shapes how pocket parks are used', 1, 'The sentence links closeness with brief, spontaneous visits.'],
      ['pocket parks have practical limitations', 3, 'The sentence identifies limited facilities and sensitivity to maintenance.'],
      ['small and large parks can serve complementary roles', 4, 'The final sentence explicitly uses “complement” rather than “replace.”']
    ]
  }
]

const letters = ['A', 'B', 'C', 'D']

export const questions = Array.from({ length: 5 }, (_, taskIndex) =>
  passages.map((passage, passageIndex) => {
    const [claim, answerLine, rationale] = passage.tasks[taskIndex]
    const correctPosition = (passageIndex * 2 + taskIndex) % 4
    const distractorIndices = [0, 1, 2, 3, 4].filter((i) => i !== answerLine)
    const chosenDistractors = Array.from({ length: 3 }, (_, i) => distractorIndices[(i + taskIndex) % distractorIndices.length])
    const choiceLines = [...chosenDistractors]
    choiceLines.splice(correctPosition, 0, answerLine)
    const skill = taskIndex % 3 === 0 ? 'Direct support' : taskIndex % 3 === 1 ? 'Relevance' : 'Precision'

    return {
      id: taskIndex * passages.length + passageIndex + 1,
      title: passage.title,
      domain: passage.domain,
      passage: passage.lines,
      claim,
      choices: choiceLines.map((lineIndex, index) => ({
        letter: letters[index],
        text: passage.lines[lineIndex],
        lineIndex,
      })),
      answer: correctPosition,
      answerLine,
      rationale,
      skill,
      trap: correctPosition === 0 ? 'A nearby detail can feel convincing even when it does not prove the exact claim.' :
        correctPosition === 1 ? 'Watch for choices that share the topic but miss the conclusion’s key relationship.' :
        correctPosition === 2 ? 'Strong evidence must support every important word in the claim, not just one part.' :
        'Prefer a specific result or statement over a broad sentence that merely sounds related.'
    }
  })
).flat()
