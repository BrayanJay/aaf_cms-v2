/**
 * News Data - Articles and News Posts
 * 
 * This file contains article data for displaying news and company updates
 * in the Articles/News section of the NewsAndEvents page.
 * 
 * How to add new articles:
 * 1. Add a new object to the articlesData array with the required properties
 * 2. Include proper image paths and content
 * 3. Each article will have its own detailed page accessible via dynamic routing
 * 
 * Object structure:
 * {
 *   id: unique number,
 *   title: "Article title",
 *   slug: "url-friendly-slug", // Used for routing
 *   summary: "Brief summary for card display",
 *   content: "Full article content", // Can be HTML or markdown
 *   author: "Author name",
 *   date: "YYYY-MM-DD format",
 *   category: "Article category",
 *   images: ["path/to/image1", "path/to/image2"], // Array of images for slider
 *   tags: ["tag1", "tag2"] // Optional
 * }
 */

// Articles Data - News and Company Updates
export const articlesData = [
  {
    id: 1,
    title: "Asia Asset Finance PLC Delivers Powerful Q1, Eyes LKR 50Bn Assets Target with Rapid Growth",
    slug: "asia-asset-finance-2025-q1-growth",
    summary: "Asia Asset Finance PLC reports exceptional Q1 2025 results with 123% PBT growth, reaching LKR 41.8 billion in assets and targeting the LKR 50 billion milestone through strategic expansion and four new branch openings.",
    content: `
      <div class="article-content">
        <p>Colombo, 30 June 2025 – Asia Asset Finance PLC (AAF), one of Sri Lanka’s most trusted and fastest-growing non-banking financial institutions, has reported a Profit Before Tax (PBT) of LKR 294.8 million – reflecting a 123% year-on-year growth compared to LKR 132.2 million in Q1 2024 – and a Profit After Tax (PAT) of LKR 181 million, representing a 57% year-on-year increase from LKR 115.8 million in Q1 2024, for the first quarter ended 30 June 2025. This robust performance underscores the company’s resilience and its ability to sustain growth in a competitive financial services landscape.</p>
        <p>The significant growth in PBT demonstrates AAF’s ability to generate strong pre-tax earnings through revenue expansion and operational efficiency. Meanwhile, the healthy 57% rise in PAT reflects not only stronger operating performance but also effective management of operational costs and financing costs.</p>
        <p>The company’s asset base has now reached an impressive LKR 41.8 billion, and with strong momentum across all its business segments, AAF is firmly on course to achieve its next significant milestone – the LKR 50 billion mark – in the near future. This milestone reflects not only financial strength but also the company’s strategic focus on expansion, innovation, and inclusivity in its services.</p>
        <p>Asia Asset Finance’s footprint continued to grow during the first quarter, with the opening of four new branches, strengthening its presence in key regions and ensuring greater accessibility for customers. This expansion is a clear demonstration of AAF’s commitment to financial inclusion, enabling individuals, families, and small businesses to access much-needed credit and investment products closer to where they live and work.</p>

        <h6>Reflecting on the strong start to the year, Rajiv Gunawardana, Chief Executive Officer of Asia Asset Finance PLC, said:</h6>
        <p>“Our Q1 results are not just about the numbers – they reflect our strategy in action. We are expanding our reach, strengthening our portfolio, and positioning Asia Asset Finance to become a valued financial service provider for the people of Sri Lanka. As we look ahead, our focus remains clear: to continue delivering value to our customers and shareholders while contributing to Sri Lanka’s economic growth.”</p>
        <p>Backed by the global strength of its parent company, Muthoot Finance, the world’s largest gold financing company, Asia Asset Finance benefits from deep international expertise while remaining firmly rooted in Sri Lanka’s financial sector. With an A+ Fitch Rating, a 55-year legacy of trust, and an expanding network of 105 branches reaching into rural areas, AAF continues to build a strong foundation for the future.</p>
        <p>The first quarter of 2025 has set the tone for another year of growth and transformation for Asia Asset Finance. With a strong financial performance, ambitious expansion plans, and a clear trajectory towards the LKR 50 billion asset milestone, the company is redefining its role in the financial services industry and solidifying its place as one of Sri Lanka’s most dynamic and forward-looking institutions.</p>
      </div>
    `,
    date: "2025-08-27",
    category: "NEWS",
    images: [
      "/media/newsandevents/article-1.webp"
    ],
    tags: ["Growth", "Financial Performance", "Expansion"]
  },
  {
    id: 2,
    title: "Asia Asset Finance Honors 15 Years in Northern Province at 55th Anniversary Festivities",
    slug: "asia-asset-finance-55th-and-northern-province-15th-anniversary",
    summary: "Asia Asset Finance PLC celebrated its 55th anniversary in Killinochchi and Jaffna, marking 15 years in the Northern Region and expanding to 107 branches with new openings in Murunkan and Palali. Backed by Muthoot Finance, AAF remains committed to financial inclusion, women’s empowerment, and innovation across Sri Lanka.  ",
    content: `
      <div class="article-content">
        <p><b>Jaffna, September 2025</b> – Asia Asset Finance PLC (AAF), one of Sri Lanka’s fastest-growing and most trusted non-banking financial institutions, marked its 55th anniversary in grand style with two unforgettable celebrations in the Northern Province. The first was held in Killinochchi on the 5th of September 2025, followed by another landmark event in Jaffna on the 6th of September 2025. Each celebration welcomed more than 500 distinguished guests, including long-standing customers, community leaders, and key stakeholders, reflecting the loyalty and trust AAF has built over decades.</p>
        <p>These ceremonies also commemorated the fifteenth anniversary of Asia Asset Finance’s presence in the Northern Region, a market that has become central to the company’s growth and its mission of financial inclusion. With 24 branches established across the Northern Province, AAF continues to bring financial services closer to rural communities while promoting women’s empowerment and entrepreneurship.</p>
        <p>Founded in 1970, Asia Asset Finance has grown steadily over more than 5 decades, establishing itself as a household name in Sri Lanka’s financial services sector. What began as a modest operation has now expanded into a network of 107 branches islandwide. This strength is enhanced by the company’s affiliation as a subsidiary of Muthoot Finance, the world’s largest gold loan company and a multi-billion-dollar financial powerhouse. The partnership provides Asia Asset Finance with global expertise and scale, while allowing it to remain firmly rooted in the trust and local knowledge it has nurtured since its inception.</p>
        <p>The anniversary celebrations were also marked by 2 significant expansion milestones. On the 5th of September, the company inaugurated a new branch in Murunkan, followed by the opening of another in Palali on the 6th of September. These openings pushed the company’s network to 107 branches islandwide, reinforcing its commitment to serving both urban and rural communities with greater accessibility.</p>
        <p>Adding to the festive spirit, Asia Asset Finance organized a massive Riyapola campaign in Nallur during the anniversary week. The campaign brought together three-wheeler and motorbike sellers, individual vendors, and eager buyers, creating a lively marketplace where deals and connections flourished. This initiative underscored the company’s ability to blend cultural celebration with financial opportunity, reaching people at grassroots level while strengthening its community presence.</p>
        <p>Over the years, Asia Asset Finance has built a diverse product portfolio to meet the needs of its customers. Its services include gold loans, leasing facilities, mortgage loans, fixed deposits, foreign exchange and money exchange services. The company has also taken strides into digital finance with its innovative LuckEwallet app, which enables customers to access services conveniently and securely from their mobile phones. With an A+ Fitch Rating, a 55 year legacy, and the global backing of Muthoot Finance, AAF has consistently proven its resilience, accessibility, and innovation in the financial services industry.</p>
        <p>Beyond numbers, Asia Asset Finance has always placed emphasis on financial inclusion and empowerment. The company’s mission is not limited to providing financial services but extends to uplifting women, families, and rural communities across Sri Lanka. By offering financial literacy, accessible loans, and savings opportunities, AAF has positioned itself as a trusted partner in helping individuals secure their futures and realize their aspirations. The Northern Region, where the company now operates 24 branches, exemplifies this commitment. For 15 years, AAF has been a key player in bringing financial confidence and stability to families and small businesses in the region, and the recent anniversary celebrations paid tribute to that journey.</p>
        <p>Speaking at the ceremonies, Rajiv Gunawardana, Chief Executive Officer of Asia Asset Finance PLC, reflected on the company’s achievements and vision. “Celebrating 55 years is not just about looking back at our achievements,” he said. “It is about reaffirming our vision for the future. The Northern Region has been a vital part of our journey, and we are proud to celebrate 15 years of growth and service here. With 24 branches in the North, we remain committed to driving financial inclusion, empowering women, and uplifting rural communities. The opening of our new branches in Palali and Murunkan are clear reflections of our mission to bring financial solutions closer to the people who need them most. Backed by the global strength of Muthoot Finance, we look forward with confidence to the next chapter of growth, innovation, and community empowerment.”</p>
        <p>The celebrations in Killinochchi and Jaffna served not only as a tribute to the company’s legacy but also as a bold statement of intent for the future. Asia Asset Finance’s strategy of combining local presence with global expertise places it in a unique position to meet the evolving financial needs of Sri Lankans.</p>
        <p>As the company moves forward, its focus remains clear: to empower people, transform lives, and ensure that financial inclusion extends to every corner of Sri Lanka. With new branches, innovative digital platforms, and a strong commitment to community-driven initiatives, Asia Asset Finance is poised to continue its dynamic growth for decades to come.</p>

      </div>
    `,
    date: "2025-09-17",
    category: "EVENT",
    images: [
      "/media/newsandevents/article-2.1.webp",
      "/media/newsandevents/article-2.2.webp",
    ],
    tags: ["Anniversary", "Northern Province", "Financial Inclusion", "Branch Expansion", "Community Empowerment", "Innovation"]
  },
  {
    id: 3,
    title: "Creating Smiles of Hope: Asia Asset Finance Celebrates Children’s Day at Apeksha Cancer Hospital",
    slug: "creating-smiles-hope-asia-asset-finance-childrens-day-apeksha-cancer-hospital-2025",
    summary: "Asia Asset Finance, with Samagi Sevana and its CSR team Creating Smiles, celebrated Children’s Day 2025 at Apeksha Cancer Hospital. The event filled the ward with joy through singing, dancing, magic, cartoon characters, and gifts, bringing hope to young patients and support to their families.",
    content: `
      <div class="article-content">
        <p>Children’s Day 2025 became more than a calendar date — it became a memory of joy, love, and healing at the Apeksha Cancer Hospital pediatric ward, thanks to Asia Asset Finance PLC. In a world where little warriors battle daily with extraordinary courage, Asia Asset Finance stepped forward with a mission not of finance, but of humanity: to create smiles that last beyond the moment. </p>
        <p>The celebration was organized by the company’s CSR team, “Creating Smiles,” in collaboration with the charitable organization Samagi Sevana. Together, they turned the hospital ward into a place of wonder. The event carried the theme of laughter and togetherness, proving that joy and laughter is one of the most powerful medicines. From the moment the program began, the ward echoed with happiness. Singing and dancing performances filled the air with rhythm and energy, drawing claps and cheer from children and parents alike. Exciting competitions were held, giving these children a chance to showcase their talents and win small prizes that lit up their faces with pride. Adding to the magic, cartoon characters walked among the children, shaking hands, playing games, and taking photos that turned ordinary moments into treasured memories. A mesmerizing magic show kept the children wide-eyed with awe, while colorful dance acts made them forget, even briefly, the challenges they face every day. No child was left behind. Each one received toys and essential items, thoughtfully selected to bring comfort and happiness. Parents, too, were remembered with donations and supplies to help ease the weight off their daily struggles. It was a day that reached both hearts and homes, recognizing not only the resilience of the children but also the sacrifices of their families. Speaking about the event, Yuveni Diaz, the Head of CSR of Asia Asset Finance PLC, shared an emotional reflection: </p>
        <p><i>“When you look into the eyes of these children, you see both fragility and unimaginable strength. Our role as a company goes far beyond financial services — it is to stand with our communities, to create moments of joy even in the darkest of times, and to remind every child that they are not alone in their fight. This Children’s Day, we did not just celebrate; we created hope.” </i></p>
        <p>The success of the program was a testament to the dedication of Asia Asset Finance’s Creating Smiles team. Every detail — from the performances to the giveaways — was carefully arranged to ensure that the children felt loved, valued, and celebrated. For the children of Apeksha, it was a day to forget treatments and embrace childhood again. For their parents, it was a reminder that the community stands beside them. And for Asia Asset Finance, it was a reaffirmation of a corporate philosophy built not only on financial strength but on compassion, inclusion, and care. </p>
        <p>As the company marks 55 years of service and trust, initiatives like this illuminate its vision: to empower people, transform lives, and create smiles that last forever. On Children’s Day 2025, that vision came alive — in the sound of laughter, the sparkle of young eyes, and the hope that tomorrow will be brighter. </p>
      </div>
    `,
    date: "2025-10-01",
    category: "EVENT",
    images: [
      "/media/newsandevents/article-3.webp"
    ],
    tags: ["Children's Day", "CSR", "Apeksha Cancer Hospital", "Creating Smiles", "Community Support"]
  },
  {
  id: 4,
  title: "Asia Asset Finance champions Women Empowerment with breast-cancer awareness for tea-estate workers in Ginigathhena",
  slug: "asia-asset-finance-champions-women-empowerment-with-breast-cancer-awareness-for-tea-estate-workers-ginigathhena-2025",
  summary: "Asia Asset Finance, in partnership with Hatton Plantation, empowered over 500 women on the Kenilworth tea estate with a vital breast-cancer awareness program. The initiative, a cornerstone of AAF's Women Empowerment theme, provided practical knowledge on early detection, aiming to save lives in underserved plantation communities.",
  content: `
    <div class="article-content">
      <p>Ginigathhena, Sri Lanka — More than 500 women employed on tea estates took part in a breast-cancer awareness and advisory programme at the Kenilworth Plantation, as Asia Asset Finance PLC (AAF)—in collaboration with Hatton Plantation—delivered its annual community outreach focused on early detection through knowledge and confidence. The initiative is a flagship expression of AAF’s corporate theme of Women Empowerment, placing women’s health, dignity, and access to information at the centre of community progress. </p>
      <p>Throughout the programme, local doctors led practical sessions on self-examination techniques, early warning signs, risk factors, and when to seek screening at the nearest hospital or MOH clinic. Participants engaged in Q&A discussions in their own languages, receiving clear guidance on incorporating regular self-checks into daily routines and on where to access public health services for follow-up. </p>
      <p>“We pick the tea-estate workers because they are always overlooked. As a company dedicated to CSR, our responsibility is to reach those who are least served and equip them with the information that saves lives,” said Yuveni Diaz, Head of CSR at Asia Asset Finance PLC. “By bringing accurate advice to their doorstep, we empower women to act early—for themselves, their families, and their communities.” </p>
      <p>The event advances AAF’s broader Women Empowerment agenda: enabling women to make informed choices, improving household well-being, and strengthening local economies. In parallel with financial-inclusion efforts—such as convenient branch services and digital access via LuckEwallet—AAF’s health-education drives are designed to reduce practical barriers (distance, transport, time away from work) that too often delay preventive care in plantation communities. </p>
      <p>The initiative is underpinned by AAF’s institutional strength and nationwide reach. The company is Fitch A+ (National) rated, the only Sri Lankan subsidiary of the global Muthoot Finance group, and serves customers through 107 branches across the island. That scale and governance allow AAF to mobilise credible partnerships and deliver programmes that are both practical and protective—aligning social impact with rigorous standards of responsibility.</p>
      <p>Organisers noted strong engagement throughout the day, with women asking informed questions and leaving with step-by-step guidance for ongoing self-care and pathways to medical consultation when needed. By situating the programme within the estate and focusing on clear, actionable advice, the outreach helped build a culture of routine self-examination and timely follow-up—core to saving lives. </p>
      <p>As the session concluded at Kenilworth, AAF reaffirmed that Women Empowerment will remain a central pillar of its CSR strategy, with plans to expand advisory programmes across the estate sector in the months ahead in close coordination with local health authorities and community leaders. </p>
      <p>For more information on Asia Asset Finance’s CSR and Women Empowerment initiatives, contact Corporate Communications via 1369 or visit your nearest AAF branch. </p>
    </div>
  `,
  date: "2025-10-13",
  category: "EVENT",
  images: [
    "/media/newsandevents/article-4.webp"
  ],
  tags: ["Women Empowerment", "CSR", "Breast Cancer Awareness", "Tea Estate Workers", "Community Health"]
  },
  {
  id: 5,
  title: "Asia Asset Finance PLC Clinches Four Awards at National Project Management Excellence Awards 2025 ",
  slug: "asia-asset-finance-plc-clinches-four-awards-national-project-management-excellence-awards-2025",
  summary: "Asia Asset Finance PLC triumphed at the National Project Management Excellence (NPME) Awards 2025, securing four major honours including two Golds, a Silver, and a Bronze. The wins highlight AAF's commitment to innovation, community development, operational excellence, and digital transformation, showcasing its ability to deliver impactful projects across Sri Lanka.",
  content: `
    <div class="article-content">
      <p>Asia Asset Finance PLC (AAF) lit up the National Project Management Excellence (NPME) Awards 2025, taking home four major honours in one night; proof that when discipline meets purpose, great brands don’t just participate, they set the pace.</p>
      <p>Asia Asset Finance won: </p>
      <ul>
        <li>1. Gold – Best Innovative Project of the Year </li>
        <li>2. Gold – Best Managed Project in Community Development/ CSR </li>
        <li>3. Silver – Best Lean Project of the Year </li>
        <li>4. Bronze – Best Managed Project in Digital Transformation </li>
      </ul>  
      <p>For customers, partners, and communities across Sri Lanka, the message is clear. This is a company that delivers on time, to standard, and with measurable impact. </p>
      <p>Innovation Gold went to AMIE (Advanced Management Intelligence Engine), Sri Lanka’s first AI-powered policy and company directory in the NBFI sector, built by Asia Asset Finance. AMIE replaced a manual, error-prone search process with a 25-second, always-current answer turning policy access into a competitive advantage. It’s innovation with governance baked in faster decisions, cleaner compliance and stronger risk discipline. </p>
      <p>The second Gold, Best Managed Project in Community Development/CSR celebrated the landmark “Asia Asset Clean Sri Lanka Hetata Atak.” In a first for Sri Lanka, AAF independently executed a nationwide, self-funded sustainability initiative across eight provinces tailored to the needs of each region. The programme delivered real outcomes across environmental, economic, and social pillars. A Beehive Fence Program to reduce human elephant conflict, drug-prevention campaigns, sustainable farming initiatives, beach clean-ups, and reforestation drives, among others. No external sponsorships, no contracts. Just a bold private-sector model that sets a new benchmark for scale, accountability, and national relevance. </p>
      <p>Operational excellence took Silver with the Fuel Reimbursement Process Digitalization Project. A classic Lean transformation that slashed processing time from 17 hours (and a 28-day wait) to under two minutes. By digitizing workflows on internal systems and enabling real-time fund transfers, the team eliminated manual errors, reduced staff fatigue, and achieved a 98% employee-satisfaction rate. Lean isn’t a slogan at AAF, it’s a lived discipline that frees people to do their best work. </p>
      <p>The Bronze in Digital Transformation recognized Sri Lanka’s first fully paperless recruitment and on boarding platform in the NBFI sector. The project cut the process from 47 steps to just 15, enabled remote on boarding, added real-time tracking, strengthened compliance, and delivered LKR 4.1 million in savings, elevating candidate and stakeholder experience while building a scalable engine for talent. </p>
      <p>“These four wins are not trophies on a shelf, they’re a public scorecard on how we execute,” said Rajiv Gunawardena, the Chief Executive Officer of Asia Asset Finance PLC. “From AI and digital platforms to Lean breakthroughs and a self-funded national CSR movement, our teams proved that disciplined project management can lift customers, colleagues, and communities. Together and at scale.” </p>
      <p>Behind the momentum is a brand built for the long run. A 55-year legacy in Sri Lanka, a Fitch A+(lka) credit rating, the governance depth of being the only Sri Lankan subsidiary of the Muthoot Finance Group, and a 100+ branch footprint that turns strategy into nationwide action amplified by digital platforms like LuckEwallet. Asia Asset Finance is writing a simple, powerful promise into every project. Trust you can verify, impact you can feel and execution you can measure.</p>
    </div>
  `,
  date: "2025-10-29",
  category: "ACHIEVEMENT",
  images: [
    "/media/newsandevents/article-5.webp"
  ],
  tags: ["Project Management", "NPME Awards", "Innovation", "Community Development", "Digital Transformation", "Operational Excellence", "PMI"]
  },
  {
  id: 6,
  title: "Asia Asset Finance continues to shine with rapid growth in Business and PBT exceeding LKR 980Mn YOY",
  slug: "asia-asset-finance-continues-shine-rapid-growth-business-pbt-exceeding-lkr-980mn-yoy-2025",
  summary: "Asia Asset Finance PLC reports outstanding Q2 2025 results with a 150% increase in Profit Before Tax to LKR 983.06 million, driven by a 45% rise in interest income and a robust lending portfolio of LKR 36.7 billion. The company strengthens its balance sheet, expands its branch network to 107 locations, and reaffirms its commitment to financial inclusion and innovation across Sri Lanka.",
  content: `
    <div class="article-content">
      <p>Asia Asset Finance PLC (AAF) has reported a remarkable performance for the six months ended 30 September 2025, reaffirming its position as one of Sri Lanka’s most trusted and forward looking financial institutions. The results highlight exceptional growth, disciplined governance, and a sustained commitment to customer-focused innovation, built on over five decades of financial leadership.</p>
      <p>Interest income rose by LKR 1.2 billion, a 45% year-on-year increase, driven by strategic product diversification and tight cost control. The Net Interest Margin (NIM) improved to 11.01%, up from 9.16% in 2024, placing AAF near the industry average of 11.5% as of June 2025.</p>
      <p>Profitability surged, with Profit Before Tax (PBT) increasing by 150% to LKR 983.06 million, compared to LKR 392.56 million a year earlier. This impressive growth reflects stronger portfolio quality, efficient credit underwriting, and operational excellence. Return on Equity (ROE) rose to 20.12%, outperforming the industry average of 15.2%, showcasing effective capital use and enhanced shareholder value.</p>
      <p>The company’s lending portfolio expanded to LKR 36.7 billion from LKR 24.4 billion, led primarily by the growth of its gold loan segment. Asset quality continued to strengthen, with the Non-Performing Loan (NPL) ratio improving to 9.39% from 16.13%, and the provision coverage ratio rising to 50.25% from 37.11%. These gains reflect AAF’s robust risk management and credit governance framework.</p>
      <p>Maintaining one of the strongest and healthiest balance sheets, AAF reported a Core Capital Adequacy Ratio above 25%, exceeding the industry average of 20%, alongside a capital-to-deposit ratio of 19%. The Net Asset Value per share rose to LKR 33.62 from LKR 29.52 in 2024, reflecting improved profitability and shareholder returns. These figures underscore prudent capital management, financial resilience, and consistent regulatory compliance.</p>
      <p>Reinforcing its islandwide presence, AAF expanded its branch network to 107 locations, up from 91 in September 2024. This expansion supports the company’s mission to enhance accessibility, strengthen regional service, and reach underbanked communities across Sri Lanka.</p>
      <p>Commenting on the results, Rajiv Gunawardena, Chief Executive Officer of Asia Asset Finance PLC, stated:</p>
      <p><i>“These results go beyond numbers; they reflect discipline, innovation, and  the trust our customers place in us. At Asia Asset Finance, growth is not just financial; it’s about empowering people and delivering real impact. This achievement belongs to every team member who continues to drive excellence with purpose.”</i></p>
      <p>Asia Asset Finance’s success is also rooted in its commitment to digital transformation. Through Lean-driven process improvements and advanced digital integrations, the company has enhanced efficiency, transparency, and turnaround times. Its LuckEwallet platform continues to expand access to digital payments and financial services, reflecting AAF’s evolution into a customer-first, future-ready institution.</p>
      <p>Backed by a Fitch A+(lka) rating and the strength of the Muthoot Finance Group, Asia Asset Finance continues to blend global expertise with local insight — building a stable, innovative, and inclusive financial brand for the future.</p>
      <p>Asia Asset Finance PLC; Trust you can verify. Impact you can feel. Execution you can measure.</p>
      </div>
  `,
  date: "2025-11-11",
  category: "NEWS",
  images: [
    "/media/newsandevents/article-6.webp"
  ],
  tags: ["Financial Performance", "Growth", "Profitability", "Asset Quality", "Branch Expansion"]
  },
  {
  id: 7,
  title: "Growth with Purpose: A Conversation with Roshan Gunasekara, Executive Director & Chief Operating Officer",
  slug: "growth-with-purpose-conversation-roshan-gunasekara-executive-director-chief-operating-officer-2026",
  summary: "Building Trust at Scale: A Conversation with Roshan Gunasekara - Executive Director & Chief Operating Officer, Asia Asset Finance PLC",
  content: `
    <div class="article-content">
      <p>As Sri Lanka’s financial services landscape continues to evolve, Asia Asset Finance PLC has emerged as a benchmark for sustainable growth, governance, and brand credibility. Closing 2025 on a historic high, the company secured two national accolades at the People’s Excellency Awards 2025 — Fastest Growing Finance Company and Outstanding Finance Company of the Year.</p>  
      <p>These awards reinforce Asia Asset Finance’s standing not merely as a high-performing institution, but as a trusted financial partner with purpose.</p>
      <p>We speak with Roshan Gunasekara, Executive Director and Chief Operating Officer, on what this milestone represents for the brand, the business, and the country.</p>
      
      <p><b>1. Asia Asset Finance secured two major national awards in 2025. What does this recognition mean for the brand and the organisation?</b></p>
      <p>This recognition represents validation — not just of performance, but of how we do business. Being recognised as the Fastest Growing Finance Company speaks to our momentum, while the Outstanding Finance Company of the Year award affirms the strength of our governance, culture, and values.</p>
      <p>For us, brand strength is built on consistency. These awards reflect decades of disciplined growth, responsible leadership, and trust earned across generations of customers.</p>
      
      <p><b>2. Asia Asset Finance has grown rapidly while maintaining stability. How do you balance ambition with responsibility?</b></p>
      <p>Growth without discipline is temporary. At Asia Asset Finance, ambition is always anchored in responsibility — through strong risk governance, ethical practices, and long-term thinking.</p>
      <p>Our approach has been to build institutional strength before scale, ensuring that every phase of growth reinforces customer confidence and stakeholder trust.</p>
      
      <p><b>3. The Fastest Growing Finance Company award highlights strong momentum. What has driven this success?</b></p>
      <p>Our growth has been driven by three fundamentals: customer-centricity, operational discipline, and digital enablement.</p>
      <p>We strengthened our core offerings — gold loans, leasing, mortgages and fixed deposits — while expanding digital solutions that improve accessibility and efficiency via the Luckewallet app. Growth followed naturally because customers recognised consistency, transparency, and value.</p>
      
      <p><b>4. Asia Asset Finance carries a 55-year legacy and a Fitch A+ rating. How do these credentials strengthen brand trust today?</b></p>
      <p>In financial services, trust is everything. A 55-year legacy and a Fitch A+ rating send a clear signal of stability, resilience, and credibility.</p>
      <p>These are not symbolic achievements — they reflect governance standards, prudent financial management, and ethical leadership that customers rely on, especially in uncertain times.</p>
      
      <p><b>5. How does being the only Sri Lankan subsidiary of global giant Muthoot Finance strengthen Asia Asset Finance’s positioning?</b></p>
      <p>Muthoot Finance provides global strength, scale, and expertise. Asia Asset Finance contributes deep local insight, relationships, and cultural understanding.</p>
      <p>Together, this creates a powerful proposition — global credibility with local commitment — allowing us to operate with confidence while remaining deeply rooted in Sri Lanka.</p>
      
      <p><b>6. With over 100 branches islandwide, how does the organisation maintain community relevance at scale?</b></p>
      <p>Our branch network is a strategic asset, not just a footprint. Each branch represents trust, accessibility, and partnership within its community.</p>
      <p>This local presence enables us to serve diverse customer needs while maintaining a consistent brand promise across the island.</p>
      
      <p><b>7. Asia Asset Finance is also recognised as a Great Place to Work. How does people culture influence brand strength?</b></p>
      <p>Brands are ultimately shaped by people. A strong internal culture translates directly into service quality, accountability, and customer experience.</p>
      <p>When employees feel respected and empowered, they become brand ambassadors. This people-first philosophy is central to our long-term success.</p>
      
      <p><b>8. Beyond financial performance, Asia Asset Finance is known for sustainability and CSR initiatives. Why is this important to the brand?</b></p>
      <p>At Asia Asset Finance, sustainability is integral to how we build long-term trust and relevance. We believe responsible growth must go hand in hand with social and environmental impact.</p>
      <p>Our flagship initiative, Asia Asset Clean Sri Lanka – Hetata Atak, reflects this commitment. More than a CSR programme, it is a sustained, employee-driven movement embedded across our branch network. Its impact and authenticity were nationally recognised when Hetata Atak secured two prestigious national awards, reinforcing our leadership in community-driven environmental responsibility.</p>
      <p>These initiatives strengthen our brand beyond financial performance, positioning Asia Asset Finance as a responsible corporate citizen committed to building a cleaner, more sustainable future for Sri Lanka.</p>
      
      <p><b>9. As COO, how do you personally define success beyond financial results?</b></p>
      <p>Success is building an institution that endures — one that customers trust, employees are proud of, and stakeholders respect.</p>
      <p>It’s about leaving behind systems, values, and a culture that can sustain excellence long into the future.</p>
      
      <p><b>10. How do these awards shape Asia Asset Finance’s strategic priorities going forward?</b></p>
      <p>These awards are milestones, not endpoints. They reaffirm that our strategy is working, while reminding us to stay disciplined and forward-looking.</p>
      <p>Our focus remains on Innovation, sustainable growth, digital transformation, governance excellence, and deepening customer trust.</p>
      
      <p><b>11. Finally, what message would you like to share with customers, employees, and stakeholders?</b></p>
      <p>These achievements belong to everyone who believes in Asia Asset Finance — our customers, our people, and our partners.</p>
      <p>We will continue to balance ambition with accountability, innovation with stability, and growth with purpose — building a stronger, more resilient financial future for Sri Lanka.</p>
    </div>
  `,
  date: "2026-01-05",
  category: "ACHIEVEMENT",
  images: [
    "/media/newsandevents/article-7.webp"
  ],
  tags: ["Growth", "Brand Trust", "Awards", "Financial Services", "Leadership"]
  },
  {
  id: 8,
  title: "Asia Asset Finance PLC Delivers Strong Q3 Performance with Robust Asset Growth and Profitability Gains",
  slug: "asia-asset-finance-plc-delivers-strong-q3-performance-2025",
  summary: "Asia Asset Finance PLC reported a strong financial and operational performance for the third quarter ended 31 December 2025, demonstrating sustained balance sheet expansion, improved profitability, and strengthened risk buffers amid a competitive and evolving financial sector landscape.",
  content: `
    <div class="article-content">
      <p>Asia Asset Finance PLC (AAF) recorded a strong financial and operational performance for the third quarter ended 31 December 2025, demonstrating sustained balance sheet expansion, improved profitability, and strengthened risk buffers amid a competitive and evolving financial sector landscape.</p>  
      <p>The Company’s total asset base grew to Rs. 45.76 billion, reflecting a 32.73% year-on-year increase, driven by healthy portfolio growth and disciplined asset deployment. Net asset value per share improved to Rs. 35.62, up from Rs. 31.13 a year earlier, underscoring continued value creation for shareholders.</p>
      <p>AAF’s lending portfolio showed particularly strong momentum during the quarter, with the total loan book expanding by Rs. 13.5 billion to reach Rs. 40.10 billion, marking a 50.93% year-on-year growth. This expansion was supported by focused product strategies, regional penetration, and improved credit processing efficiency across the branch network.</p>
      <p>Profitability indicators also strengthened significantly. Operating Profit Before Tax rose to Rs. 1,177 million, recording a 108.16% year-on-year increase, reflecting growth in core income streams and tighter cost discipline. Profit After Tax reached Rs. 680.29 million, up 35.79% year-on-year, while Earnings Per Share (EPS) improved to Rs. 5.48, compared to Rs. 4.03 in the corresponding period last year.</p>
      <p>With increased business volumes and profitability, statutory tax contributions also rose accordingly. Income tax expenses increased to Rs. 496.79 million, while VAT on Financial Services amounted to Rs. 533.03 million, reflecting the Company’s higher operating scale and earnings base.</p>
      <p>In parallel with portfolio growth, AAF further strengthened its credit risk safeguards. The Provision Coverage Ratio improved to 59.09%, compared to 37.68% a year earlier, indicating a more conservative and resilient provisioning position. Key prudential and performance ratios remained healthy, with Return on Equity (ROE) at 22.12%, Capital Adequacy Ratio (CAR) at 24.83%, and Net Interest Margin (NIM) sustained at 10.70%, supported by prudent funding and pricing strategies.</p>
      <p>During the quarter, the Company continued its measured expansion strategy, growing its islandwide footprint to 111 branches, with 22 additional branches planned within the financial year to further improve accessibility and customer reach. AAF also retained its Fitch A+ rating with a Stable Outlook, reaffirming its financial strength, governance standards, and risk management framework.</p>
      <p>Commenting on the Q3 results, the Chief Executive Officer Mr. Rajiv Gunawardana stated:</p>
      <p><i>“Our third-quarter performance reflects disciplined growth, strong credit governance, and focused execution across the network. We have expanded our asset base and lending portfolio while simultaneously strengthening our risk buffers and capital position. Our priority remains sustainable, quality growth- expanding access, improving efficiency, and delivering consistent value to customers, depositors, and shareholders.”</i></p>
      <p>Asia Asset Finance PLC remains strongly positioned as a trusted financial institution, backed by the Muthoot Group, a 55-year legacy, a Fitch A+ (Stable Outlook) rating, and a growing islandwide branch network of 111. With disciplined risk management, strong capital strength, and a customer-focused growth strategy, AAF continues to deliver stable and sustainable value to its customers and stakeholders.</p>
    </div>
  `,
  date: "2026-02-11",
  category: "NEWS",
  images: [
    "/media/newsandevents/article-8.webp"
  ],
  tags: ["Financial Performance", "Asset Growth", "Profitability", "Risk Management", "Branch Expansion"]
  },
];

export default articlesData;
