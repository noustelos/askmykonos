/* --------------------------------------------------------------------------
   DION — scripted demo persona (no backend; texts are verbatim from
   dion-script.md: EN = camp/theatrical, EL = clean professional concierge)
   -------------------------------------------------------------------------- */

const DION_SCRIPT = {
  en: {
    greeting: "Dion here — short for Dionysos, and yes, the island is basically my summer palace. Ask me about beaches, sunsets, where to eat, how to move around without a taxi meltdown. I'll make it glamorous. Try to keep up, agápi mou. ✨",
    sunset: "Ah, the sunset question — everyone's favorite drama. STOP going to Little Venice at 8pm with four thousand strangers, agápi mou. Yes, the windmills are iconic. They're also a scrum. For the same gold sky with room to breathe: Agios Ioannis, facing west, practically posing for you. Or Armenistis Lighthouse — fewer people, more cinema. The sun knows how to make an exit... let it. ✨",
    catamaran: "Culture AND a swim? Look at you, being efficient. Delos is the real thing — ancient, sacred, licensed guides only, and no, you can't stay the night (the gods are strict about check-out). Pair it with Rhenia next door for the swim — clear water, fewer ruins, more floating. A boat day does both. Confirm the schedule and sea conditions before you commit, though — the meltemi doesn't check your itinerary.",
    beach: "Depends — are we being social or hiding from our responsibilities? For polished and buzzy: Psarou, where the loungers cost more than my dignity and everyone's people-watching while pretending not to. For actual charm with less production: Agios Sostis — no sunbeds, no fuss, just you and the Aegean behaving beautifully. And if the wind's showing off, go south to Ornos or Platis Gialos. Linen, obviously. Cargo shorts and I are not speaking.",
    oia: "Ah, the arrival — first impressions matter, and nobody looks glamorous lost at a port. From the new port to Chora: a transfer or taxi is easiest, though taxis here play hard to get in high season. The old port sits closer to Chora — a short hop, sometimes even a walk if your luggage isn't dramatic. Sort your transfer before you land. Arriving flustered is not the vibe.",
    oneDay: "One day? Ambitious. I respect it. Morning: Chora — get gloriously lost in the whitewashed lanes, find Little Venice and the windmills before the crowds wake up. Midday: one beach, pick your energy — social or serene. Late afternoon: a slow something in Ano Mera if you want the island's quieter face. Then sunset, non-negotiable, somewhere west. One day, done with taste. Now — try to look the part.",
    windy: "Ah, the meltemi — the island's own drama queen, and it does NOT share a stage. When the north wind performs, you don't fight it, you relocate. Head south: Ornos, Platis Gialos, Psarou — tucked away, calmer water, still fabulous. Or abandon the beach entirely — Ano Mera for a slow lunch, Chora for shopping and pretending you weren't defeated by weather. The wind has opinions. So do we.",
    food: "Now we're speaking my language. For the classics: kopanisti — the local cheese that bites back — louza, fresh seafood, and almond sweets if you've earned them. For the scene: Chora and Little Venice, drinks with a view, busy and beautiful (and pricey, naturally — you're paying for the AESTHETIC). For something calmer and more authentic, Ano Mera. Then the questionable decisions? Those, agápi mou, are between you and the night. 🍸",
    family: "Family mode — less sparkle, more logistics, I understand. For calm, shallow water and easy access: Ornos and Platis Gialos are your friends — organized, gentle, close to everything. Agios Ioannis works too, and rewards you with a sunset later. Keep the day simple, stay near amenities, and don't over-schedule — the island's charm is best at half speed. Everyone stays happy. Even you.",
    catamaranTour: "A sunset on the water — now THAT'S how you exit a day with style. A sunset boat cruise around Mykonos, often toward Delos or Rhenia, is the premium move: gold light, open sea, and someone else steering while you pose. It's a paid experience, and worth it for the drama. Confirm timing, pickup point, and sea conditions with the provider directly — the sea makes its own schedule.",
    delosTour: "Delos — the sacred one. An entire ancient city on an island, birthplace of Apollo, and no one lives there now except history and lizards. You go by boat, you tour with a licensed guide (non-negotiable — it's protected), and you leave before sunset. It's culture with a capital everything. Check the boat schedule and guide availability before you plan around it.",
    transfer: "Smart — arriving flustered is not the look. A private transfer from the airport or port takes the taxi-roulette out of your day (and taxis here genuinely play hard to get in season). Airport, new port, old port — all sortable in advance. Arrange it before you arrive, step off looking composed, and let someone else deal with the luggage. That's the energy.",
    beachClub: "A beach club day — my natural habitat. The polished scene lives at Psarou and Paraga; Paradise and Super Paradise bring the party energy if that's your confession. Loungers get claimed early and the good ones are a commitment, so plan ahead. Bring less than you think and more attitude than you need. And linen. Always linen.",
    photographer: "A photographer — because if it isn't documented, did the glamour even happen? For couples, honeymoons, proposals, or golden-hour portraits, a local photographer knows the light and the spots that make you look effortless (the effort is theirs). I can point you to the category — you'll want to confirm the details, dates, and style directly with the provider. Now go rehearse your candid laugh.",
    wedding: "STOP — this is the good stuff. A proposal or wedding on Mykonos: sunset light, sea behind you, and the whole island playing set designer. You'll want a planner for the logistics and a photographer to catch the moment before the happy tears ruin everyone's composure. I can guide you to the right categories — the specifics you'll confirm directly with each provider. Deep breath, agápi mou. It's going to be beautiful.",
    quietSide: "The quieter side — so there IS depth to you. Ano Mera is the island's calmer heart: an inland village square, slower lunches, a monastery, life at a human pace instead of a runway. It's Mykonos with its shoes off. Pair it with a remote beach like Fokos if you want the full escape — though you'll need transport, and the wind gets a vote. Serenity, arranged.",
    carRental: "Do you NEED a car? Depends how far your ambitions roam. For Chora and the nearby beaches, no — buses run, transfers exist, and parking in season is its own tragedy. But for the remote corners — Fokos, the hidden coves — a car or ATV gives you freedom the bus won't. Weigh it: convenience versus the parking drama. Choose wisely, and either way, don't drive in heels.",
    fallback: "Hmm — that one's playing hard to get, even with me. This is a little preview of what the full AskMykonos can do, so I keep to what I know: beaches, sunsets, food, getting around, the occasional elegant rescue. Try one of those — or, if you fancy the whole fabulous concierge for your own island, someone's listening. ✨",
    emergency: "First — are you safe right now? For any emergency in Greece, call 112 (European emergency number). For medical help, 166; police, 100; coast guard, 108. If this is urgent, contact them now — I can wait. Once you're safe, I'm here to help with whatever comes next."
  },
  el: {
    greeting: "Καλησπέρα, είμαι ο Dion — ο ψηφιακός σας concierge για τη Μύκονο. Μπορώ να βοηθήσω με παραλίες, ηλιοβασιλέματα, φαγητό, μετακινήσεις και πρακτικά ζητήματα. Ρωτήστε με ό,τι θέλετε.",
    sunset: "Το Little Venice και οι Μύλοι είναι τα κλασικά σημεία, αλλά έχουν πολύ κόσμο κατά τη δύση. Για πιο ήρεμη θέα προς τα δυτικά, ο Άγιος Ιωάννης είναι εξαιρετική επιλογή. Εναλλακτικά, ο Φάρος Αρμενιστής προσφέρει πανοραμική θέα με λιγότερο πλήθος. Καλή ιδέα να πάτε λίγο πριν τη δύση για καλή θέση.",
    catamaran: "Ναι, μπορείτε να συνδυάσετε και τα δύο. Η Δήλος είναι σημαντικός αρχαιολογικός χώρος (με αδειούχους ξεναγούς), και η γειτονική Ρήνεια είναι ιδανική για κολύμπι σε καθαρά νερά. Μια ημερήσια εκδρομή με σκάφος καλύπτει και τα δύο. Επιβεβαιώστε τα δρομολόγια και τις καιρικές συνθήκες πριν κλείσετε.",
    beach: "Εξαρτάται από τη διάθεση. Για οργανωμένη παραλία με beach clubs, η Ψαρού και ο Πλατύς Γιαλός είναι δημοφιλείς. Για κάτι πιο ήσυχο και φυσικό, ο Άγιος Σώστης δεν έχει ξαπλώστρες αλλά έχει ωραία ατμόσφαιρα. Αν φυσάει, προτιμήστε τις νότιες παραλίες (Όρνος, Πλατύς Γιαλός) που είναι πιο προστατευμένες.",
    oia: "Από το νέο λιμάνι προς τη Χώρα, η πιο βολική επιλογή είναι ένα ιδιωτικό transfer ή ταξί — αν και τα ταξί είναι περιορισμένα στην αιχμή της σεζόν. Το παλιό λιμάνι βρίσκεται πιο κοντά στη Χώρα (μικρή απόσταση, ενίοτε και με τα πόδια). Καλή ιδέα να κανονίσετε τη μετακίνησή σας εκ των προτέρων.",
    oneDay: "Για μία μέρα: Το πρωί, μια βόλτα στη Χώρα με τα γραφικά σοκάκια, το Little Venice και τους Μύλους (νωρίς, πριν τον κόσμο). Το μεσημέρι, μία παραλία της επιλογής σας. Το απόγευμα, ίσως μια στάση στην Άνω Μερά για την πιο ήσυχη πλευρά του νησιού. Και το ηλιοβασίλεμα κάπου δυτικά. Μια ισορροπημένη μέρα.",
    windy: "Ο μελτέμι (βόρειος άνεμος) μπορεί να είναι έντονος στη Μύκονο. Τις μέρες με πολύ αέρα, οι νότιες παραλίες (Όρνος, Πλατύς Γιαλός, Ψαρού) είναι πιο προστατευμένες με πιο ήρεμα νερά. Εναλλακτικά, μια βόλτα στην Άνω Μερά για φαγητό ή στη Χώρα για ψώνια είναι καλή ιδέα για μέρα με αέρα.",
    food: "Για παραδοσιακές γεύσεις, δοκιμάστε κοπανιστή (τοπικό τυρί), λούζα, φρέσκο ψάρι και αμυγδαλωτά. Για ατμόσφαιρα με θέα, η Χώρα και το Little Venice έχουν πολλές επιλογές για φαγητό και ποτό (με ανάλογες τιμές). Για κάτι πιο ήσυχο και αυθεντικό, η Άνω Μερά είναι καλή επιλογή.",
    family: "Για οικογένειες, οι παραλίες με ήρεμα και ρηχά νερά και εύκολη πρόσβαση είναι ιδανικές — ο Όρνος και ο Πλατύς Γιαλός είναι οργανωμένοι και βολικοί. Ο Άγιος Ιωάννης είναι επίσης καλή επιλογή, με ωραίο ηλιοβασίλεμα. Κρατήστε το πρόγραμμα απλό και κοντά σε παροχές.",
    catamaranTour: "Μια κρουαζιέρα με σκάφος στο ηλιοβασίλεμα (συχνά προς Δήλο ή Ρήνεια) είναι μια premium εμπειρία με υπέροχο φως και θέα. Είναι πληρωμένη υπηρεσία. Επιβεβαιώστε ώρες, σημείο παραλαβής και θαλάσσιες συνθήκες απευθείας με τον πάροχο.",
    delosTour: "Η Δήλος είναι σημαντικός αρχαιολογικός χώρος, προσβάσιμος μόνο με σκάφος και με αδειούχο ξεναγό. Η επίσκεψη γίνεται εντός της ημέρας (δεν επιτρέπεται διανυκτέρευση). Επιβεβαιώστε δρομολόγια σκαφών και διαθεσιμότητα ξεναγών εκ των προτέρων.",
    transfer: "Ένα ιδιωτικό transfer από το αεροδρόμιο ή το λιμάνι είναι η πιο βολική λύση, ειδικά επειδή τα ταξί είναι περιορισμένα στην αιχμή της σεζόν. Καλύπτονται αεροδρόμιο, νέο και παλιό λιμάνι. Κανονίστε το εκ των προτέρων για ομαλή άφιξη.",
    beachClub: "Για μια μέρα σε beach club, η Ψαρού και η Παράγκα προσφέρουν πιο κομψή ατμόσφαιρα, ενώ ο Παράδεισος και ο Σούπερ Παράδεισος έχουν πιο έντονο, πάρτι κλίμα. Οι ξαπλώστρες πιάνονται νωρίς — καλή ιδέα να κάνετε κράτηση εκ των προτέρων.",
    photographer: "Ένας τοπικός φωτογράφος (για ζευγάρια, γάμους, προτάσεις γάμου ή πορτρέτα στο χρυσό φως) γνωρίζει τα καλύτερα σημεία και το φως του νησιού. Μπορώ να σας κατευθύνω στην κατηγορία υπηρεσίας — επιβεβαιώστε ημερομηνίες, στυλ και λεπτομέρειες απευθείας με τον πάροχο.",
    wedding: "Για μια πρόταση γάμου ή γάμο στη Μύκονο, ένας wedding planner βοηθά με την οργάνωση και ένας φωτογράφος καταγράφει τη στιγμή. Το ηλιοβασίλεμα και η θέα στη θάλασσα δημιουργούν ιδανικό σκηνικό. Μπορώ να σας κατευθύνω στις κατηγορίες υπηρεσιών — οι λεπτομέρειες επιβεβαιώνονται με κάθε πάροχο.",
    quietSide: "Για την πιο ήσυχη πλευρά της Μυκόνου, η Άνω Μερά προσφέρει μια παραδοσιακή πλατεία, ήρεμα γεύματα και ένα μοναστήρι — ζωή σε πιο αργό ρυθμό. Μπορείτε να τη συνδυάσετε με μια απομακρυσμένη παραλία όπως ο Φωκός (χρειάζεται μετακίνηση και εξαρτάται από τον άνεμο).",
    carRental: "Εξαρτάται από τα σχέδιά σας. Για τη Χώρα και τις κοντινές παραλίες, δεν είναι απαραίτητο — υπάρχουν λεωφορεία και transfers (και το πάρκινγκ είναι δύσκολο στη σεζόν). Για πιο απομακρυσμένα σημεία (π.χ. Φωκός), ένα αυτοκίνητο ή ATV δίνει περισσότερη ελευθερία.",
    fallback: "Αυτό δεν το καλύπτω σε αυτή την demo έκδοση. Μπορώ να βοηθήσω με παραλίες, ηλιοβασιλέματα, φαγητό, μετακινήσεις και πρακτικά ζητήματα για τη Μύκονο. Δοκιμάστε μία από αυτές τις κατηγορίες. (Πρόκειται για επίδειξη — το πλήρες AskMykonos διατίθεται.)",
    emergency: "Πρώτα απ' όλα — είστε ασφαλής αυτή τη στιγμή; Για επείγοντα στην Ελλάδα, καλέστε 112 (Ευρωπαϊκός αριθμός έκτακτης ανάγκης). Για ιατρική βοήθεια 166, αστυνομία 100, λιμενικό 108. Αν είναι επείγον, επικοινωνήστε τώρα — μπορώ να περιμένω. Μόλις είστε ασφαλής, είμαι εδώ να βοηθήσω."
  }
};

/* Known card-prefill questions (must mirror the data-chat-prefill-* attributes
   in index.html) — typed input matching maps these to DION_SCRIPT keys. */
const DION_QUESTIONS = {
  en: {
    catamaranTour: "Can you suggest sunset catamaran options in Mykonos?",
    delosTour: "Tell me about a Delos guided tour.",
    transfer: "I need an airport or port transfer.",
    beachClub: "Help me plan a beach club day.",
    photographer: "Can you arrange a photographer?",
    wedding: "I'm planning a proposal or wedding.",
    quietSide: "Show me the quieter side of Mykonos.",
    carRental: "Do I need to rent a car?"
  },
  el: {
    catamaranTour: "Μπορείς να προτείνεις επιλογές για καταμαράν στο ηλιοβασίλεμα στη Μύκονο;",
    delosTour: "Πες μου για μια ξενάγηση στη Δήλο.",
    transfer: "Χρειάζομαι μεταφορά από το αεροδρόμιο ή το λιμάνι.",
    beachClub: "Βοήθησέ με να οργανώσω μια μέρα σε beach club.",
    photographer: "Μπορείς να κανονίσεις φωτογράφο;",
    wedding: "Οργανώνω πρόταση γάμου ή γάμο.",
    quietSide: "Δείξε μου την πιο ήσυχη πλευρά της Μυκόνου.",
    carRental: "Χρειάζεται να νοικιάσω αυτοκίνητο;"
  }
};

const translations = {
  en: {
    pageTitle: "AskMykonos.ai – Smart, Stylish Mykonos Answers",
    metaDescription: "AskMykonos.ai is your smart, stylish shortcut to Mykonos: beaches, transfers, sunsets, food and plans without the group chat meltdown.",
    ogTitle: "AskMykonos.ai – Smart, Stylish Mykonos Answers",
    ogDescription: "Beaches, transfers, sunsets, food and plans without the group chat meltdown. Ask anything. The island has opinions.",
    twitterDescription: "Your smart, stylish shortcut to Mykonos. Useful answers, minimal nonsense.",
    navHow: "How it works",
    navTours: "Tours",
    navConcierge: "Concierge",
    navEarlyAccess: "Ask AI",
    startAsking: "Start asking",
    seeQuestions: "Try a question",
    heroTitle: "Your smart, stylish shortcut to Mykonos.",
    heroSubtitle: "Beaches, transfers, sunsets, food and plans, without the group chat meltdown.",
    noAppPart: "Free.",
    noSignupPart: "No app.",
    justAskPart: "No sign-up.",
    valueStrip: "Free. No app. No sign-up. Just ask.",
    heroValueStrip: "Ask anything. The island has opinions.",
    valueReinforce: "Less chaos. More sparkle.",
    previewMode: "Ask the Island",
    chatInstructionLine: "Ask anything about Mykonos",
    chatEmptyHelper: "Start with a question",
    chatLanguageNote: "Ask in English, Greek, or your own language.",
    chatGreeting: DION_SCRIPT.en.greeting,
    liveDemoBadge: "Live demo",
    chatPlaceholder: "Tap a suggested question below",
    sendButton: "Send",
    thinkingMessage: "Thinking...",
    noReplyMessage: "Sorry, I could not generate a reply.",
    disconnectedMessage: "Sorry, I got disconnected. Please try again.",
    chatUser: "You",
    chatAi: "Ask Mykonos AI",
    chatSampleQuestion1: "What is the plan if the wind is being dramatic?",
    chatSampleAnswer1: "Tell me your area, time available and mood. Windy day? We adapt. Elegantly.",
    chatSampleQuestion2: "Sunset without the stampede?",
    chatSampleAnswer2: "Little Venice and the windmills are iconic but busy. Agios Ioannis and Armenistis Lighthouse can feel calmer, while a sunset boat plan may be smoother when sea conditions allow.",
    aiAttribution: "This chat is a demo with scripted answers — see our live AI concierge at",
    demoFeature: "Ask the Island",
    questionsTitle: "What needs solving first?",
    questionsIntro: "Beaches, transfers, sunsets, dinner plans and windy-day backups. Useful answers. Minimal nonsense.",
    starterLine: "Pick the question closest to the current chaos",
    previewLabel: "Ask the Island",
    worksToday: "Ready now",
    questionLabel: "Question",
    viewTourOptions: "See sea plans",
    askAnother: "Ask something else",
    seeTips: "See practical tips",
    realGuideSoon: "Live AI guide",
    joinEarlyAccess: "Start asking",
    howEyebrow: "Concierge logic",
    howTitle: "A little planning never ruined anyone’s outfit.",
    howLanguageTitle: "Ask naturally",
    howLanguageText: "Type or speak in your language. The answer follows your lead.",
    step1Title: "Need a plan?",
    step1Text: "Ask for beaches, food, sunset, transfers or a calm route that does not require a committee.",
    step2Title: "Choosing between options?",
    step2Text: "Compare Little Venice or Ano Mera, beach or boat, bus or private transfer.",
    step3Title: "Need the next move?",
    step3Text: "Get the simple answer first, then ask deeper if the island gets complicated.",
    toursEyebrow: "Sea and sunset",
    toursTitle: "Plans with a little polish",
    toursIntro: "Ask about boat days, Delos and Rhenia ideas, wine routes and sunset plans without overplanning the outfit or the afternoon.",
    tourLabelPopular: "Popular",
    tourLabelClassic: "Relaxed",
    tourLabelRomantic: "Romantic",
    tourLabelPractical: "Practical",
    tourCatamaranTitle: "Sunset plans without the stampede",
    tourCatamaranText: "Aegean views, swimming stops and calmer timing when conditions cooperate.",
    tourVolcanoTitle: "Delos, Rhenia, or keep it easy?",
    tourVolcanoText: "Ask whether archaeology, swimming stops or a simpler beach plan fits your day.",
    tourWineTitle: "Dinner, drinks, then taste",
    tourWineText: "Local flavors, island wines and an evening rhythm with fewer bad decisions.",
    tourTransfersTitle: "Escape the port elegantly",
    tourTransfersText: "Ask about airport, port and day-plan transfers before the luggage gets dramatic.",
    tourStatus: "Ask for ideas",
    partnerDisclosure: "Some links may be partner recommendations.",
    networkEyebrow: "The ASK Network",
    networkTitle: "Not a lone island. A constellation.",
    networkText: "One proven concept — an AI travel concierge people reach by simply asking. The flagship runs it live; the rest of the network is a portfolio of premium “Ask” domains, each with a working demo, available for acquisition.",
    networkThisSite: "Demo · For sale — this site",
    networkForSale: "Demo · For sale",
    conciergeEyebrow: "Concierge",
    conciergeTitle: "Boutique guidance, minus the group chat meltdown",
    conciergeIntro: "Ask about photos, private transfers, beauty, proposals and special evenings with the right Mykonos context.",
    conciergeSeoLine: "For couples, families, friends and special moments that need calm local guidance.",
    conciergePhotographersTitle: "Photos without panic",
    conciergePhotographersText: "Couple shoots, honeymoon sessions, family photos and sunset frames with a little taste.",
    conciergeWeddingTitle: "Planning a ceremony?",
    conciergeWeddingText: "Local planners for weddings, elopements and symbolic moments.",
    conciergeFlowersTitle: "Need flowers or a setup?",
    conciergeFlowersText: "Bouquets, ceremony styling and quiet proposal details.",
    conciergeTransfersTitle: "Arrive like you meant to",
    conciergeTransfersText: "Private arrivals and licensed local providers, depending on what you need.",
    askAiForOptions: "Ask AI for options",
    conciergeAskOptions: "Ask AI for options",
    conciergeDisclosure: "Featured services may include partner recommendations.",
    instagramAria: "Visit Ask Mykonos AI on Instagram",
    notifyMe: "Ask now",
    seoContextTitle: "AskMykonos.ai is a Mykonos AI assistant",
    seoContextText: "Use this Mykonos travel guide AI for things to do in Mykonos, Mykonos beaches, Mykonos sunset spots, Mykonos tours, boat rentals Mykonos, food, transport and local experiences. AskMykonos.ai works as an AI travel planner for Greece focused on real-time Mykonos questions.",
    revenueEyebrow: "Revenue Potential",
    revenueTitle: "What this domain could become",
    revenueAffiliateTitle: "Affiliate commissions",
    revenueAffiliateText: "Tours, transfers and experiences — proven on the network flagship.",
    revenueListingsTitle: "Featured listings",
    revenueListingsText: "Local businesses pay for presence in the concierge’s recommendations.",
    revenueBookingTitle: "Booking integration",
    revenueBookingText: "End-to-end reservations, on commission or a flat fee.",
    revenueSponsoredTitle: "Sponsored answers",
    revenueSponsoredText: "Premium placement, clearly labeled.",
    revenueNote: "The flagship already runs a working affiliate attribution system — this domain is ready for the same engine.",
    footerDisclaimer: "Independent visitor guide. Not affiliated with Google or any official tourism authority.",
    allRights: "All rights reserved.",
    privacyLink: "Privacy & Cookies",
    termsLink: "Terms",
    cookieNoticeAria: "Cookie notice",
    cookieText: "This demo sets no tracking cookies. Only your language and banner preference are stored locally in your browser.",
    cookieDismiss: "Got it",
    closeButton: "Close",
    privacyCloseAria: "Close privacy notice",
    privacyTitle: "Privacy Policy",
    privacyP1: "AskMykonos.ai is currently a demonstration website. It does not collect or store personal data — there are no accounts, no contact forms, and no analytics.",
    privacyP2: "The chat assistant is a scripted demo that runs entirely in your browser. Messages you type are not transmitted or stored anywhere.",
    privacyP3: "Your language and cookie-banner preferences are saved only in your browser's local storage.",
    privacyP5: "For questions about this demo or the domain, contact",
    termsCloseAria: "Close terms notice",
    termsTitle: "Terms",
    termsP1: "Some links may be partner recommendations. Information should be verified before booking or traveling.",
    termsP2: "AskMykonos.ai is an independent visitor guide and not an official tourism authority.",
    termsP3: "For legal or general information questions, contact",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    languageToggleLabel: "Language",
    questionAction: "✦",
    questions: {
      sunset: "Sunset without the stampede?",
      catamaran: "Can I do Delos and a swim?",
      beach: "Where should I beach today?",
      oia: "How do I escape the port elegantly?",
      oneDay: "Mykonos in one day, with taste?",
      windy: "What if the wind is being dramatic?",
      food: "Dinner, drinks, then questionable decisions?",
      family: "Family-friendly, but make it easy"
    },
    answers: {
      sunset: "Little Venice and the windmills are iconic but busy. Agios Ioannis and Armenistis Lighthouse can feel calmer. The island is gorgeous; the crowd management is the trick.",
      catamaran: "Delos and Rhenia can work well when timing and sea conditions line up. Ask with your date, port area and appetite for swimming versus culture.",
      beach: "Ornos and Platis Gialos are practical. Psarou and Paraga are livelier. Agios Sostis and Fokos feel quieter when conditions are right. The wind has opinions. So do we.",
      oia: "From the new port, plan ahead for bus, taxi or private transfer. Taxis can be limited in high season, so improvisation is not always the chicest accessory.",
      oneDay: "Keep it edited: Mykonos Town, Little Venice, one beach and one sunset plan. A short list is not boring. It is taste.",
      windy: "Choose Mykonos Town lanes, Ano Mera, sheltered food spots or a flexible beach plan. Boat tours and exposed beaches depend on sea conditions.",
      food: "Try kopanisti, louza, fresh seafood, amygdalota, local cheeses and simple tavern dishes. Pick for taste, not just the view.",
      family: "Ornos, Platis Gialos, short town walks, easy boat ideas, ice cream and calmer sunset viewpoints usually keep the day smoother."
    }
  },
  el: {
    pageTitle: "AskMykonos.ai – Ρώτησε τον AI οδηγό σου για τη Μύκονο",
    metaDescription: "Ρώτησε για τη Μύκονο σε πραγματικό χρόνο. Πάρε άμεσες AI απαντήσεις για παραλίες, ηλιοβασιλέματα, εκδρομές, φαγητό, μετακινήσεις και τοπικές εμπειρίες. Χωρίς εφαρμογή. Χωρίς εγγραφή.",
    ogTitle: "AskMykonos.ai – Ρώτησε τον AI οδηγό σου για τη Μύκονο",
    ogDescription: "Ρώτησε για τη Μύκονο σε πραγματικό χρόνο και πάρε άμεσες AI απαντήσεις για παραλίες, ηλιοβασιλέματα, εκδρομές, φαγητό και μετακινήσεις.",
    twitterDescription: "Ρώτησε για τη Μύκονο σε πραγματικό χρόνο και πάρε άμεσες AI απαντήσεις για παραλίες, ηλιοβασιλέματα, εκδρομές και τοπικές εμπειρίες.",
    navHow: "Πώς λειτουργεί",
    navTours: "Εκδρομές",
    navConcierge: "Concierge",
    navEarlyAccess: "Ask AI",
    startAsking: "Ξεκίνα την ερώτηση",
    seeQuestions: "Δες παραδείγματα",
    heroTitle: "Ο έξυπνος οδηγός σου για τη Μύκονο.",
    heroSubtitle: "Παραλίες, μετακινήσεις, ηλιοβασιλέματα, φαγητό και πρακτικές απαντήσεις, γρήγορα και καθαρά.",
    noAppPart: "Δωρεάν.",
    noSignupPart: "Χωρίς εφαρμογή.",
    justAskPart: "Χωρίς εγγραφή.",
    valueStrip: "Δωρεάν. Χωρίς εφαρμογή. Χωρίς εγγραφή. Απλώς ρώτα.",
    heroValueStrip: "Ρώτησε ό,τι χρειάζεσαι για το νησί.",
    valueReinforce: "Πρακτικές απαντήσεις για πιο εύκολο πρόγραμμα.",
    previewMode: "Ρώτησε το νησί",
    chatInstructionLine: "Ρώτησε ό,τι θέλεις για τη Μύκονο",
    chatEmptyHelper: "Ξεκίνα με μια ερώτηση",
    chatLanguageNote: "Ρώτησε στα Αγγλικά, στα Ελληνικά ή στη δική σου γλώσσα.",
    chatGreeting: DION_SCRIPT.el.greeting,
    liveDemoBadge: "Ζωντανό demo",
    chatPlaceholder: "Επιλέξτε μια ερώτηση παρακάτω",
    sendButton: "Αποστολή",
    thinkingMessage: "Σκέφτομαι...",
    noReplyMessage: "Συγγνώμη, δεν μπόρεσα να δημιουργήσω απάντηση.",
    disconnectedMessage: "Συγγνώμη, αποσυνδέθηκα. Δοκίμασε ξανά.",
    chatUser: "Εσύ",
    chatAi: "Ask Mykonos AI",
    chatSampleQuestion1: "Τι να κάνω σήμερα στη Μύκονο;",
    chatSampleAnswer1: "Πες μου περιοχή, διαθέσιμο χρόνο και διάθεση: παραλία, ηλιοβασίλεμα, φαγητό, εκδρομή ή κάτι χαλαρό. Θα σου προτείνω ένα απλό πλάνο.",
    chatSampleQuestion2: "Καλύτερο ηλιοβασίλεμα απόψε;",
    chatSampleAnswer2: "Η Μικρή Βενετία και οι ανεμόμυλοι είναι διάσημα αλλά έχουν κόσμο. Ο Άγιος Ιωάννης και ο Φάρος Αρμενιστή είναι πιο ήρεμες επιλογές, ενώ μια βόλτα με σκάφος στο ηλιοβασίλεμα είναι πιο χαλαρή premium επιλογή.",
    aiAttribution: "Το chat είναι demo με έτοιμες απαντήσεις — δείτε τον ζωντανό AI concierge στο",
    demoFeature: "Ρώτησε το νησί",
    questionsTitle: "Τι χρειάζεσαι πρώτα;",
    questionsIntro: "Ρώτησε για παραλίες, μετακινήσεις, ηλιοβασίλεμα, φαγητό, εκδρομές ή εναλλακτικές όταν έχει αέρα.",
    starterLine: "Διάλεξε ένα παράδειγμα ερώτησης",
    previewLabel: "Ρώτησε το νησί",
    worksToday: "Έτοιμο τώρα",
    questionLabel: "Ερώτηση",
    viewTourOptions: "Δες επιλογές εκδρομών",
    askAnother: "Άλλη ερώτηση",
    seeTips: "Δες πρακτικές συμβουλές",
    realGuideSoon: "Ο AI οδηγός είναι live",
    joinEarlyAccess: "Ξεκίνα την ερώτηση",
    howEyebrow: "Πρακτική καθοδήγηση",
    howTitle: "Πώς να οργανώσεις πιο εύκολα τη μέρα σου",
    howLanguageTitle: "Ρώτησε φυσικά",
    howLanguageText: "Γράψε ή μίλησε στη γλώσσα σου. Η απάντηση προσαρμόζεται στη γλώσσα που χρησιμοποιείς.",
    step1Title: "Χρειάζεσαι πλάνο;",
    step1Text: "Ρώτησε για παραλίες, φαγητό, ηλιοβασίλεμα, μετακινήσεις ή μια πιο ήρεμη διαδρομή.",
    step2Title: "Διαλέγεις ανάμεσα σε επιλογές;",
    step2Text: "Σύγκρινε Μικρή Βενετία ή Άνω Μερά, σκάφος ή παραλία, λεωφορείο ή ιδιωτική μεταφορά.",
    step3Title: "Θέλεις το πιο εύκολο επόμενο βήμα;",
    step3Text: "Πάρε μια καθαρή απάντηση και ρώτησε περισσότερα αν χρειαστεί.",
    toursEyebrow: "Θάλασσα και ηλιοβασίλεμα",
    toursTitle: "Θάλασσα, εκδρομές και πρακτικές επιλογές",
    toursIntro: "Ρώτησε για σκάφος, Δήλο, Ρήνεια, wine routes και ηλιοβασίλεμα με βάση τον χρόνο και τις συνθήκες σου.",
    tourLabelPopular: "Δημοφιλές",
    tourLabelClassic: "Χαλαρό",
    tourLabelRomantic: "Ρομαντικό",
    tourLabelPractical: "Πρακτικό",
    tourCatamaranTitle: "Θέλεις ηλιοβασίλεμα από τη θάλασσα;",
    tourCatamaranText: "Θέα στο Αιγαίο, στάσεις για μπάνιο και πιο ήρεμο ηλιοβασίλεμα από το νερό.",
    tourVolcanoTitle: "Σε ενδιαφέρει η Δήλος;",
    tourVolcanoText: "Ρώτησε αν η Δήλος, η Ρήνεια και οι στάσεις για μπάνιο ταιριάζουν στη μέρα σου.",
    tourWineTitle: "Θέλεις αργή διαδρομή κρασιού;",
    tourWineText: "Τοπικές γεύσεις, νησιώτικα κρασιά και χαλαρός βραδινός ρυθμός.",
    tourTransfersTitle: "Χρειάζεσαι εύκολη άφιξη;",
    tourTransfersText: "Ρώτησε για μεταφορές από αεροδρόμιο, λιμάνι και ημερήσια πλάνα.",
    tourStatus: "Ρώτησε για ιδέες",
    partnerDisclosure: "Ορισμένοι σύνδεσμοι μπορεί να είναι συνεργατικές προτάσεις.",
    networkEyebrow: "Το δίκτυο ASK",
    networkTitle: "Όχι μοναχικό νησί. Αστερισμός.",
    networkText: "Μία αποδεδειγμένη ιδέα — ένας AI ταξιδιωτικός concierge που ο κόσμος βρίσκει απλώς ρωτώντας. Η ναυαρχίδα τη λειτουργεί ζωντανά· το υπόλοιπο δίκτυο είναι ένα χαρτοφυλάκιο premium «Ask» domains, το καθένα με λειτουργικό demo, διαθέσιμο προς εξαγορά.",
    networkThisSite: "Demo · Προς πώληση — αυτό το site",
    networkForSale: "Demo · Προς πώληση",
    conciergeEyebrow: "Concierge",
    conciergeTitle: "Καθοδήγηση για στιγμές που χρειάζονται σωστή οργάνωση",
    conciergeIntro: "Ρώτησε για φωτογραφίες, ιδιωτικές μεταφορές, beauty, προτάσεις γάμου και ξεχωριστές βραδιές με σωστό τοπικό πλαίσιο.",
    conciergeSeoLine: "Για ζευγάρια, οικογένειες, παρέες και ειδικές στιγμές που χρειάζονται ήρεμη τοπική καθοδήγηση.",
    conciergePhotographersTitle: "Θέλεις φωτογραφίες χωρίς ψάξιμο;",
    conciergePhotographersText: "Couple shoots, honeymoon, οικογενειακές φωτογραφίες και στιγμές στο ηλιοβασίλεμα.",
    conciergeWeddingTitle: "Σχεδιάζεις τελετή;",
    conciergeWeddingText: "Τοπικοί planners για γάμους, elopements και συμβολικές στιγμές.",
    conciergeFlowersTitle: "Χρειάζεσαι λουλούδια ή setup;",
    conciergeFlowersText: "Ανθοδέσμες, styling τελετής και διακριτικές λεπτομέρειες πρότασης.",
    conciergeTransfersTitle: "Θέλεις premium μεταφορά;",
    conciergeTransfersText: "Ελικόπτερο, ιδιωτικές αφίξεις και αδειοδοτημένοι τοπικοί πάροχοι.",
    askAiForOptions: "Ρώτησε το AI για επιλογές",
    conciergeAskOptions: "Ρώτησε το AI για επιλογές",
    conciergeDisclosure: "Οι προτεινόμενες υπηρεσίες μπορεί να περιλαμβάνουν συνεργατικές προτάσεις.",
    instagramAria: "Άνοιγμα του Ask Mykonos AI στο Instagram",
    notifyMe: "Ρώτησε τώρα",
    seoContextTitle: "Το AskMykonos.ai είναι ένας AI βοηθός για τη Μύκονο",
    seoContextText: "Χρησιμοποίησε αυτόν τον AI ταξιδιωτικό οδηγό για τη Μύκονο: τι να κάνεις στη Μύκονο, παραλίες, σημεία για ηλιοβασίλεμα, τουρ και εκδρομές, ενοικιάσεις σκαφών, φαγητό, μετακινήσεις και τοπικές εμπειρίες. Το AskMykonos.ai λειτουργεί ως AI ταξιδιωτικός βοηθός για την Ελλάδα με άμεσες απαντήσεις για τη Μύκονο.",
    revenueEyebrow: "Δυνατότητες εσόδων",
    revenueTitle: "Τι θα μπορούσε να γίνει αυτό το domain",
    revenueAffiliateTitle: "Προμήθειες συνεργατών",
    revenueAffiliateText: "Εκδρομές, μεταφορές και εμπειρίες — αποδεδειγμένο στη ναυαρχίδα του δικτύου.",
    revenueListingsTitle: "Προβεβλημένες καταχωρίσεις",
    revenueListingsText: "Τοπικές επιχειρήσεις πληρώνουν για παρουσία στις προτάσεις του concierge.",
    revenueBookingTitle: "Ενσωμάτωση κρατήσεων",
    revenueBookingText: "Ολοκληρωμένες κρατήσεις, με προμήθεια ή σταθερή χρέωση.",
    revenueSponsoredTitle: "Χορηγούμενες απαντήσεις",
    revenueSponsoredText: "Premium προβολή, με σαφή σήμανση.",
    revenueNote: "Η ναυαρχίδα λειτουργεί ήδη ένα ενεργό σύστημα απόδοσης προμηθειών (affiliate attribution) — αυτό το domain είναι έτοιμο για την ίδια μηχανή.",
    footerDisclaimer: "Ανεξάρτητος οδηγός επισκεπτών. Δεν συνδέεται με την Google ή με επίσημο τουριστικό φορέα.",
    allRights: "Με επιφύλαξη παντός δικαιώματος.",
    privacyLink: "Απόρρητο & Cookies",
    termsLink: "Όροι",
    cookieNoticeAria: "Ενημέρωση για cookies",
    cookieText: "Αυτό το demo δεν χρησιμοποιεί cookies παρακολούθησης. Μόνο η γλώσσα και η προτίμησή σου αποθηκεύονται τοπικά στον browser σου.",
    cookieDismiss: "Κατάλαβα",
    closeButton: "Κλείσιμο",
    privacyCloseAria: "Κλείσιμο πολιτικής απορρήτου",
    privacyTitle: "Πολιτική Απορρήτου",
    privacyP1: "Το AskMykonos.ai είναι αυτή τη στιγμή ιστότοπος επίδειξης (demo). Δεν συλλέγει ούτε αποθηκεύει προσωπικά δεδομένα — δεν υπάρχουν λογαριασμοί, φόρμες επικοινωνίας ή analytics.",
    privacyP2: "Ο βοηθός συνομιλίας είναι scripted demo που εκτελείται εξ ολοκλήρου στον browser σας. Τα μηνύματα που πληκτρολογείτε δεν μεταδίδονται ούτε αποθηκεύονται πουθενά.",
    privacyP3: "Η επιλογή γλώσσας και η προτίμηση για το banner cookies αποθηκεύονται μόνο τοπικά στον browser σας.",
    privacyP5: "Για ερωτήσεις σχετικά με το demo ή το domain, επικοινωνήστε στο",
    termsCloseAria: "Κλείσιμο όρων",
    termsTitle: "Όροι",
    termsP1: "Ορισμένοι σύνδεσμοι μπορεί να είναι συνεργατικές προτάσεις. Οι πληροφορίες πρέπει να επιβεβαιώνονται πριν από κράτηση ή μετακίνηση.",
    termsP2: "Το AskMykonos.ai είναι ανεξάρτητος οδηγός επισκεπτών και δεν αποτελεί επίσημο τουριστικό φορέα.",
    termsP3: "Για νομικές ή γενικές πληροφορίες, επικοινωνήστε στο",
    menuOpen: "Άνοιγμα μενού",
    menuClose: "Κλείσιμο μενού",
    languageToggleLabel: "Γλώσσα",
    questionAction: "✦",
    questions: {
      sunset: "Πού να δω ηλιοβασίλεμα;",
      catamaran: "Να πάω Δήλο ή Ρήνεια;",
      beach: "Ποια παραλία να διαλέξω σήμερα;",
      oia: "Πώς πάω από το λιμάνι στη Χώρα;",
      oneDay: "Πώς βλέπω τη Μύκονο σε μία μέρα;",
      windy: "Τι κάνω αν έχει πολύ αέρα;",
      food: "Πού να πάω για φαγητό ή ποτό;",
      family: "Ιδέες για οικογένειες"
    },
    answers: {
      sunset: "Η Μικρή Βενετία και οι ανεμόμυλοι είναι εμβληματικά αλλά συχνά γεμάτα. Ο Άγιος Ιωάννης και ο Φάρος Αρμενιστή είναι πιο ήρεμες επιλογές για ηλιοβασίλεμα.",
      catamaran: "Το καταμαράν ή μια βόλτα με σκάφος στο ηλιοβασίλεμα είναι από τις πιο δυνατές εμπειρίες στη Μύκονο. Μπορεί να συνδυάσει στάσεις για μπάνιο στη Ρήνεια, θέα στη Δήλο και ηλιοβασίλεμα από τη θάλασσα.",
      beach: "Ο Ορνός και ο Πλατύς Γιαλός είναι πρακτικές επιλογές με εύκολη πρόσβαση. Η Ψαρού και η Παράγκα είναι πιο ζωντανές, ενώ ο Άγιος Σώστης και ο Φωκός είναι πιο ήρεμοι όταν οι συνθήκες βοηθούν.",
      oia: "Από τη Χώρα της Μυκόνου μπορείς να πας στην Άνω Μερά με λεωφορείο, ταξί, ιδιωτική μεταφορά ή ενοικιαζόμενο όχημα. Το λεωφορείο είναι πιο οικονομικό, αλλά τα δρομολόγια μπορεί να αλλάζουν στην υψηλή σεζόν.",
      oneDay: "Αν έχεις μία μέρα στη Μύκονο, κράτα το πλάνο απλό: Χώρα, Μικρή Βενετία, μία παραλία και ένα σημείο για ηλιοβασίλεμα. Για λιγότερο άγχος, διάλεξε είτε εκδρομή στη Δήλο είτε ένα απλό πλάνο παραλία και Χώρα.",
      windy: "Όταν έχει αέρα, προτίμησε τα σοκάκια της Χώρας, την Άνω Μερά, μουσεία, τοπικό φαγητό ή πιο προστατευμένα café. Οι θαλάσσιες εκδρομές και οι εκτεθειμένες παραλίες εξαρτώνται από τις συνθήκες.",
      food: "Δοκίμασε κοπανιστή, λούζα, φρέσκο ψάρι, αμυγδαλωτά, τοπικά τυριά και απλά πιάτα σε παραδοσιακές ταβέρνες. Μη διαλέγεις μόνο με βάση τη θέα.",
      family: "Ο Ορνός, ο Πλατύς Γιαλός, εύκολες βόλτες με καραβάκι, σύντομοι περίπατοι στη Χώρα, παγωτό και ήρεμα σημεία για ηλιοβασίλεμα συνήθως λειτουργούν καλά για οικογένειες."
    }
  }
};

const preview = document.querySelector("#answer-preview");
const previewQuestion = document.querySelector("#preview-question");
const previewAnswer = document.querySelector("#preview-answer");
const questionCards = document.querySelectorAll(".question-card");
const modalButtons = document.querySelectorAll("[data-modal]");
const closeButtons = document.querySelectorAll("[data-close]");
const siteHeader = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const currentYear = document.querySelector("#current-year");
const cookieBanner = document.querySelector("#cookie-banner");
const dismissCookies = document.querySelector("#dismiss-cookies");
const languageButtons = document.querySelectorAll("[data-language]");
const languageToggle = document.querySelector(".language-toggle");
const workerUrl = "PASTE_ASKMYKONOS_WORKER_URL_HERE";
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const cookieStorageKey = "askMykonosCookiePreference";
const languageStorageKey = "preferredLanguage";
let currentLanguage = "en";

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

const getStoredValue = (key) => {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
};

const setStoredValue = (key, value) => {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    return;
  }
};

const getCookiePreference = () => getStoredValue(cookieStorageKey);
const setCookiePreference = (value) => setStoredValue(cookieStorageKey, value);

const hideCookieBanner = () => {
  if (!cookieBanner) {
    return;
  }

  cookieBanner.classList.add("is-hidden");
};

const getMeta = (selector) => document.querySelector(selector);

const updateMetaContent = (selector, content) => {
  const meta = getMeta(selector);

  if (meta) {
    meta.setAttribute("content", content);
  }
};

const updateLanguageUrl = (language) => {
  const url = new URL(window.location.href);
  url.searchParams.set("lang", language);
  window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
};

const getInitialLanguage = () => {
  const urlLanguage = new URLSearchParams(window.location.search).get("lang");

  if (urlLanguage === "en" || urlLanguage === "el") {
    return urlLanguage;
  }

  const storedLanguage = getStoredValue(languageStorageKey);

  if (storedLanguage === "en" || storedLanguage === "el") {
    return storedLanguage;
  }

  return "en";
};

const applyTranslations = (language) => {
  const copy = translations[language];

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (typeof copy[key] === "string") {
      element.textContent = copy[key];
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(",").forEach((pair) => {
      const [attribute, key] = pair.split(":").map((value) => value.trim());

      if (attribute && typeof copy[key] === "string") {
        element.setAttribute(attribute, copy[key]);
      }
    });
  });
};

const updateSeo = (language) => {
  const copy = translations[language];

  document.documentElement.lang = language;
  document.title = copy.pageTitle;
  updateMetaContent('meta[name="description"]', copy.metaDescription);
  updateMetaContent('meta[property="og:title"]', copy.ogTitle);
  updateMetaContent('meta[property="og:description"]', copy.ogDescription);
  updateMetaContent('meta[property="og:locale"]', language === "el" ? "el_GR" : "en_US");
  updateMetaContent('meta[name="twitter:title"]', copy.ogTitle);
  updateMetaContent('meta[name="twitter:description"]', copy.twitterDescription);
};

const updateLanguageToggle = (language) => {
  languageToggle?.setAttribute("aria-label", translations[language].languageToggleLabel);

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === language;
    button.setAttribute("aria-pressed", String(isActive));

    if (isActive) {
      button.setAttribute("aria-current", "true");
    } else {
      button.removeAttribute("aria-current");
    }
  });
};

const updateQuestionCards = (language) => {
  const copy = translations[language];

  questionCards.forEach((card) => {
    const questionKey = card.dataset.questionKey;
    const questionText = card.querySelector("[data-question-text]");

    if (!questionKey || !copy.questions[questionKey]) {
      return;
    }

    card.dataset.question = copy.questions[questionKey];
    card.dataset.actionLabel = copy.questionAction;

    if (questionText) {
      questionText.textContent = copy.questions[questionKey];
    }
  });
};

const updateActivePreview = (language) => {
  const activeCard = document.querySelector(".question-card.is-active") || questionCards[0];

  if (activeCard) {
    showAnswerPreview(activeCard, false);
  }
};

const updateChatControls = (language) => {
  const copy = translations[language];

  if (userInput) {
    userInput.setAttribute("placeholder", copy.chatPlaceholder);
  }
};

const updateMenuLabel = () => {
  if (!menuToggle) {
    return;
  }

  const copy = translations[currentLanguage];
  const isOpen = siteHeader?.classList.contains("is-menu-open");
  menuToggle.setAttribute("aria-label", isOpen ? copy.menuClose : copy.menuOpen);
};

const setLanguage = (language, options = {}) => {
  const normalizedLanguage = language === "el" ? "el" : "en";

  currentLanguage = normalizedLanguage;
  applyTranslations(normalizedLanguage);
  updateSeo(normalizedLanguage);
  updateLanguageToggle(normalizedLanguage);
  updateQuestionCards(normalizedLanguage);
  updateActivePreview(normalizedLanguage);
  updateChatControls(normalizedLanguage);
  updateMenuLabel();
  setStoredValue(languageStorageKey, normalizedLanguage);

  if (options.updateUrl) {
    updateLanguageUrl(normalizedLanguage);
  }
};

if (cookieBanner && !getCookiePreference()) {
  cookieBanner.classList.remove("is-hidden");
}

dismissCookies?.addEventListener("click", () => {
  setCookiePreference("dismissed");
  hideCookieBanner();
});

const closeMenu = () => {
  if (!siteHeader || !menuToggle) {
    return;
  }

  siteHeader.classList.remove("is-menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
  updateMenuLabel();
};

if (menuToggle && siteHeader && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteHeader.classList.toggle("is-menu-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    updateMenuLabel();
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.language, { updateUrl: true });
  });
});

document.querySelectorAll('a[href="#top"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    closeMenu();

    window.scrollTo({ top: 0, behavior: "smooth" });

    if (window.location.hash !== "#top") {
      window.history.pushState(null, "", "#top");
    }
  });
});

const askAiHash = "#ask-ai";

const getAskAiLink = (target) => target?.closest?.(`a[href="${askAiHash}"], a[href$="${askAiHash}"]`);

const getAskAiScrollTop = (target) => {
  const scrollMargin = Number.parseFloat(window.getComputedStyle(target).scrollMarginTop) || 0;
  return Math.max(0, target.getBoundingClientRect().top + window.pageYOffset - scrollMargin);
};

const scrollToAskAi = (link) => {
  const chatTarget = document.getElementById("ask-ai");

  if (!chatTarget) {
    return false;
  }

  closeMenu();

  const prefill = link?.dataset[`chatPrefill${currentLanguage === "el" ? "El" : "En"}`];

  if (prefill && userInput && !isDionReplying) {
    userInput.value = prefill;

    // Cards with a prefill question auto-send into the scripted engine
    // after a beat, so the visitor sees the question before it "goes".
    window.setTimeout(() => {
      sendMessage(prefill);
    }, DION_AUTOSEND_MS);
  }

  const targetTop = getAskAiScrollTop(chatTarget);
  const scrollBehavior = REDUCED_MOTION_QUERY.matches ? "auto" : "smooth";
  window.scrollTo({ top: targetTop, behavior: scrollBehavior });

  window.setTimeout(() => {
    const distance = Math.abs(chatTarget.getBoundingClientRect().top);

    if (distance > 140) {
      window.scrollTo({ top: getAskAiScrollTop(chatTarget), behavior: "auto" });
    }
  }, 520);

  if (window.location.hash !== askAiHash) {
    window.history.pushState(null, "", askAiHash);
  }

  if (userInput && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    window.setTimeout(() => userInput.focus({ preventScroll: true }), 560);
  }

  return true;
};

document.addEventListener("click", (event) => {
  const link = getAskAiLink(event.target);

  if (!link) {
    return;
  }

  if (!scrollToAskAi(link)) {
    return;
  }

  event.preventDefault();
});

function showAnswerPreview(card, shouldScroll = true) {
  if (!preview || !previewQuestion || !previewAnswer) {
    return;
  }

  const copy = translations[currentLanguage];
  const questionKey = card.dataset.questionKey;
  const question = copy.questions[questionKey];
  const answer = copy.answers[questionKey];

  if (!questionKey || !question || !answer) {
    return;
  }

  questionCards.forEach((item) => {
    item.classList.remove("is-active");
    item.setAttribute("aria-pressed", "false");
  });

  card.classList.add("is-active");
  card.setAttribute("aria-pressed", "true");

  previewQuestion.textContent = question;
  previewAnswer.textContent = answer;

  if (shouldScroll) {
    preview.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

questionCards.forEach((card, index) => {
  card.setAttribute("aria-pressed", "false");

  card.addEventListener("click", () => {
    if (isDionReplying) return;

    const question = translations[currentLanguage].questions[card.dataset.questionKey];
    if (!question) return;

    // Keep the answer-preview panel in sync (no scroll), then run the chat
    // flow: prefill so the question is visible for a beat, scroll to the
    // chat card, auto-send into the Dion scripted engine.
    showAnswerPreview(card, false);

    if (userInput) userInput.value = question;
    scrollToAskAi(null);

    window.setTimeout(() => {
      sendMessage(question);
    }, DION_AUTOSEND_MS);
  });

  if (index === 0) {
    card.classList.add("is-active");
    card.setAttribute("aria-pressed", "true");
  }
});

modalButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();

    const modal = document.getElementById(button.dataset.modal);

    if (!modal) {
      return;
    }

    if (typeof modal.showModal === "function") {
      modal.showModal();
      document.body.classList.add("modal-open");
      return;
    }

    modal.setAttribute("open", "");
    document.body.classList.add("modal-open");
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest("dialog");

    if (!modal) {
      return;
    }

    if (typeof modal.close === "function") {
      modal.close();
    } else {
      modal.removeAttribute("open");
    }

    document.body.classList.remove("modal-open");
  });
});

document.querySelectorAll("dialog").forEach((modal) => {
  modal.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
  });
});

function appendMessage(text, className) {
  if (!chatBox) return null;

  const msgDiv = document.createElement("div");
  const id = "msg-" + Date.now() + "-" + Math.random().toString(36).slice(2);

  msgDiv.id = id;
  msgDiv.className = className;
  msgDiv.innerText = text;

  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;

  return id;
}

/* --------------------------------------------------------------------------
   Dion scripted engine — resolve, typing dots, word-by-word reveal
   -------------------------------------------------------------------------- */

const REDUCED_MOTION_QUERY = window.matchMedia("(prefers-reduced-motion: reduce)");
const FINE_POINTER_QUERY = window.matchMedia("(hover: hover) and (pointer: fine)");
const DION_TYPING_MS = 800;
const DION_WORD_MS = 45;
const DION_AUTOSEND_MS = 300;
let isDionReplying = false;

const normalizeChatText = (text) =>
  String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\s;;.!?…]+$/g, "")
    .replace(/\s+/g, " ")
    .trim();

const EMERGENCY_PATTERNS_EN = [
  /\b(emergency|urgent|help|injured|injury|accident|theft|stolen|robbed|medical|hospital|ambulance|police|danger|dangerous|drowning)\b/,
  /lost .{0,12}passport/,
  /passport .{0,12}(lost|stolen|gone)/
];

const EMERGENCY_STEMS_EL = [
  "επειγον", "βοηθεια", "ατυχημα", "κλοπη", "εκλεψαν", "χαθηκε", "εχασα",
  "τραυματ", "νοσοκομειο", "ασθενοφορο", "αστυνομια", "κινδυν", "πνιγ"
];

const isEmergencyText = (normalized) =>
  EMERGENCY_PATTERNS_EN.some((pattern) => pattern.test(normalized)) ||
  EMERGENCY_STEMS_EL.some((stem) => normalized.includes(stem));

/* Exact-match table: every known question (both languages) → Dion key.
   Known questions are checked BEFORE the emergency keywords on purpose:
   they are our own scripted texts (one contains the word "help"), and a
   real emergency never arrives as an exact known question. */
const matchKnownQuestion = (normalized) => {
  const languages = ["en", "el"];

  for (const lang of languages) {
    const chipQuestions = translations[lang].questions;
    for (const key of Object.keys(chipQuestions)) {
      if (normalizeChatText(chipQuestions[key]) === normalized) return key;
    }

    const prefillQuestions = DION_QUESTIONS[lang];
    for (const key of Object.keys(prefillQuestions)) {
      if (normalizeChatText(prefillQuestions[key]) === normalized) return key;
    }
  }

  return null;
};

const resolveDionReply = (text) => {
  const script = DION_SCRIPT[currentLanguage] || DION_SCRIPT.en;
  const normalized = normalizeChatText(text);

  const knownKey = matchKnownQuestion(normalized);
  if (knownKey && script[knownKey]) return script[knownKey];

  if (isEmergencyText(normalized)) return script.emergency;

  return script.fallback;
};

const scrollChatToBottom = () => {
  if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;
};

const showTypingDots = () => {
  const bubble = document.createElement("div");
  bubble.className = "bot-message typing";
  bubble.setAttribute("aria-hidden", "true");

  for (let i = 0; i < 3; i += 1) {
    const dot = document.createElement("span");
    dot.className = "typing-dot";
    bubble.appendChild(dot);
  }

  chatBox.appendChild(bubble);
  scrollChatToBottom();
  return bubble;
};

const revealBotReply = (text, onDone) => {
  const msgDiv = document.createElement("div");
  msgDiv.className = "bot-message";

  const words = String(text).split(" ");
  words.forEach((word, index) => {
    const span = document.createElement("span");
    span.className = "reveal-word";
    span.textContent = index < words.length - 1 ? word + " " : word;
    msgDiv.appendChild(span);
  });

  chatBox.appendChild(msgDiv);
  scrollChatToBottom();

  const spans = msgDiv.children;
  let revealed = 0;

  const timer = window.setInterval(() => {
    if (revealed < spans.length) {
      spans[revealed].classList.add("is-visible");
      revealed += 1;
      if (revealed % 5 === 0) scrollChatToBottom();
    }

    if (revealed >= spans.length) {
      window.clearInterval(timer);
      scrollChatToBottom();
      if (onDone) onDone();
    }
  }, DION_WORD_MS);
};

const deliverDionReply = (replyText, onDone) => {
  const startReveal = () => revealBotReply(replyText, onDone);

  if (REDUCED_MOTION_QUERY.matches) {
    // Reduced motion: skip the pulsing dots, keep the word-by-word reveal
    // (the reveal is the demo concept, not a vestibular effect).
    startReveal();
    return;
  }

  const dots = showTypingDots();
  window.setTimeout(() => {
    dots.remove();
    startReveal();
  }, DION_TYPING_MS);
};

async function sendMessage(text) {
  const cleanText = String(text || "").trim();

  if (!cleanText) return;
  if (!chatBox || !userInput) return;
  if (isDionReplying) return;

  const copy = translations[currentLanguage];

  appendMessage(cleanText, "user-message");
  userInput.value = "";
  userInput.disabled = true;
  if (sendBtn) sendBtn.disabled = true;

  const isWorkerConfigured =
    workerUrl &&
    !workerUrl.includes("PASTE_") &&
    !workerUrl.includes("white-fog-d126") &&
    !workerUrl.includes("asksantorini") &&
    !workerUrl.includes("workers.dev");

  if (!isWorkerConfigured) {
    isDionReplying = true;

    deliverDionReply(resolveDionReply(cleanText), () => {
      isDionReplying = false;
      userInput.disabled = false;
      if (sendBtn) sendBtn.disabled = false;
      if (FINE_POINTER_QUERY.matches) {
        userInput.focus({ preventScroll: true });
      }
    });

    return;
  }

  const loadingId = appendMessage(copy.thinkingMessage, "bot-message loading");

  try {
    const response = await fetch(workerUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: cleanText,
        destination: "Mykonos",
        brand: "AskMykonos.ai",
        language: currentLanguage
      })
    });

    let data = null;

    try {
      data = await response.json();
    } catch (jsonError) {
      throw new Error("Worker did not return valid JSON.");
    }

    if (!response.ok) {
      throw new Error(data?.error || "Worker request failed.");
    }

    const loadingEl = loadingId ? document.getElementById(loadingId) : null;
    if (loadingEl) loadingEl.remove();

    appendMessage(data?.reply || copy.noReplyMessage, "bot-message");

  } catch (error) {
    console.error("AskMykonos chat error:", error);

    const loadingEl = loadingId ? document.getElementById(loadingId) : null;
    if (loadingEl) loadingEl.remove();

    appendMessage(copy.disconnectedMessage, "bot-message error");

  } finally {
    userInput.disabled = false;
    if (sendBtn) sendBtn.disabled = false;
    userInput.focus();
  }
}

if (sendBtn && userInput) {
  sendBtn.addEventListener("click", () => {
    sendMessage(userInput.value);
  });

  userInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage(userInput.value);
    }
  });
}

setLanguage(getInitialLanguage());
