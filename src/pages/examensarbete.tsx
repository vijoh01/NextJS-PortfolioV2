// pages/examensarbete.js

import Head from 'next/head';

const ExamensarbetePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <Head>
        <title>Examensarbete - Viktor Johansson FE22</title>
        <meta name="description" content="Skapandet av en lyckad app - Från idé till verklighet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="sm:mx-auto sm:max-w-3xl sm:mt-12">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">Skapandet av en lyckad app</h1>
          <p className="mt-2 text-xl text-gray-600">Från idé till verklighet</p>
          <p className="mt-4 text-base text-gray-500">Viktor Johansson FE22</p>
        </div>

        <section className="mt-8 space-y-8">
          <div>
            <h2 className="text-xl font-bold">Ordlista</h2>
            <p className="mt-2">UX - User experience - användarupplevelse</p>
            <p>Målgrupp - fokusgrupp (personer som ska använda din app)</p>
            <p>Iterativ - En process som sker i ett par steg där man kan återgå till föregående och göra justeringar.</p>
            <p>Figma - Programvara som ofta används av UX designers.</p>
            <p>API - Application programming interface</p>
          </div>

          <div>
            <h2 className="text-xl font-bold">Inledning</h2>
            <p className="mt-2">
              I denna text utforskar jag processen för att skapa en lyckad app, från idé till verklighet. Syftet är att ge läsaren en djupare förståelse för de olika aspekterna som krävs för att utveckla en framgångsrik app och att skapa en meningsfull interaktion mellan användaren och appen. Jag kommer att identifiera och analysera faktorer för framgång och presentera metoder för användarcentrerad design. Vidare kommer jag att diskutera hur man kan säkerställa appens relevans och unikhet i en konkurrensutsatt marknad.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">Bakgrund</h2>
            <p className="mt-2">
              Idag lever vi i en komplex värld med höga standarder, där tusentals appar konkurrerar på den globala marknaden med över 8.93 miljoner mobilappar tillgängliga världen över påstår Ash Turner och att det är det tydligt att appindustrin är i ständig tillväxt. I denna miljö spelar användarupplevelsen allt större roll för en apps framgång enligt Microsoft. Användarupplevelse, eller UX-Design handlar inte bara om att inte bara om att göra appar enkla enligt IT-Ord att förstå och visuellt tilltalande utan även om att skapa en meningsfull interaktion mellan användaren och appen. Jag har därför valt att ha med en ordlista för att underlätta för läsaren för att bidra till en bättre läsupplevelse. Mitt syfte med detta arbete är att göra den lättläst för dig och att den ska innehålla en röd tråd för att undvika förvirring. Det är små byggstenar jag valt att ta med för att uppfylla en standard som är anpassad för alla läsare. Samma tankesätt är viktigt när man bygger appar. Du bygger inte den för dig själv som förmodligen sitter på någon form av teknisk kompetens. Utan förmodligen en bredare publik som kan ha helt andra kompetenser i livet. Förutom användarupplevelse så finns det flera andra faktorer som bidrar till en lyckad app. Funktionalitet är en viktig aspekt samt prestanda för att appen ska fungera smidigt på alla enheter och plattformar enligt Entire. Samt hur relevant appidén är baserat på hur marknaden ser ut som konstant förändras. Genom mina olika aspekter som kommer att tas upp så kommer vi få en djupare förståelse av vad som krävs för att skapa en framgångsrik app.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">Frågeställning</h2>
            <p className="mt-2">
              Vilka faktorer och metoder är avgörande för att skapa en lyckad app och hur kan man säkerhetsställa dess relevans och unikhet på en konkurrensutsatt marknad?
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">Teoretiska utgångspunkter</h2>
            <h3 className="font-bold mt-4">Tillvägagångssätt</h3>
            <p className="mt-2">
              I detta arbete går jag tillväga att besvara frågan genom teoretiska analyser med olika perspektiv. Jag använder etablerade teorier inom användarcentrerad design och UX för att avgöra de avgörande faktorerna och metoderna för att skapa en lyckad app.
            </p>

            <h3 className="font-bold mt-4">Användarcentrerad Design</h3>
            <p className="mt-2">
              Enligt Entire syftar de även på att det är viktigt att inkludera användarna i designprocessen och samla in feedback för att skapa en användarcentrerad design. Det är viktigt att lägga fokus på användbarhet för att säkerställa att appen blir användbar. Det gäller även att designen är tydlig för användaren genom att den innehåller konsekventa designmönster. Till exempel att man har en bestämd stil till temat för knapparna som gör så att de passar in med temat och är enkla och tydliga för användaren. Designprocessen ska även utgå från att vara iterativ och inlyssnande på vad det kan finnas för synpunkter enligt Entire. Därför gäller det att bygga en förståelse för vad andra personer ser och sätta sig in i deras upplevelser. Du vet att du är rätt person för detta om du är allmänt öppensinnad och ödmjuk. Utifrån principerna från Adam Grant så skulle arroganta personer påstå att designen är perfekt och undvika kritik, detta är en egenskap som har en väldigt negativ effekt på designarbete. Ett exempel kan vara att de anser att de lagt ner tillräckligt med tid på design för att ta emot kritik och att den är perfekt som den redan är. Samtidigt som de behöver förklara vad designen motsvarar och hur användarna ska behöva interagera med appen.
            </p>

            <p className="mt-2">
              Det finns olika metoder för att förstå användarnas behov för att bygga ett bra UX för användarna. Det viktigaste i hela designprocessen är att förstå användaren baserat på information från Entire. Där bör man göra research som kan vara i form av enkäter, intervjuer och användartester för att få in flera olika perspektiv på hur design upplevs av andra. Därefter kan man enligt Entire bilda uppfattning av olika personer och skapa användarprofiler som kan bidra till att man får bättre förståelse för ens användare. Med denna input kan designprocessen börja smått med enkla skisser tillsammans med iterationer där man återgår och ser hur den upplevs av andra personer. Därefter kan designen fullföljas till en riktig design i ett populärt designprogram vid namnet Figma. Enligt Unger så kan dessa produkter hjälpa dig att göra det mer lättläst för dig i en svår process. Du behöver därför tänka efter hur din lösning kan lösa problemet. Därmed förtjänar du att ta hänsyn till de verktyg du kan ta reda på och sedan förbättra dem som du har fått till att vara den bästa. Det är också viktigt att sätta sig in i de hjälpmedel som kan ge dig det rätta stödet så att du kan ställa dig på ett enklare sätt. Som du ser att det handlar om att värna om något som ger dig chansen att veta vad som passar. Det viktigaste är att du kan göra det svårare att göra det bättre för att få en mer hållbar framgång. Du har också rätt att ställa dig in i en större fråga om att skapa en bättre lösning för att hjälpa dig att få en god produkt.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">Metod</h2>
            <p className="mt-2">
              För att besvara frågeställningen har jag använt en kvalitativ metod med litteraturstudier för att samla in och analysera relevant teori och forskning inom ämnet användarcentrerad design och apputveckling. Jag har också utfört en egen empirisk undersökning med intervjuer och enkäter för att få insikter från användarperspektivet.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">Resultat</h2>
            <p className="mt-2">
              Resultatet av studien visar att det finns flera avgörande faktorer för att skapa en lyckad app. En användarcentrerad designprocess, inklusive iterativ design och användarfeedback, är avgörande för att säkerställa appens användbarhet och användarnas tillfredsställelse. Det är också viktigt att ha en klar förståelse för appens målgrupp och deras behov samt att skapa en attraktiv och intuitiv användarupplevelse. Vidare är funktionalitet och prestanda avgörande för att appen ska fungera effektivt på olika enheter och plattformar.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">Diskussion</h2>
            <p className="mt-2">
              Diskussionen fokuserar på hur de identifierade faktorerna och metoderna kan tillämpas praktiskt i apputvecklingsprocessen. Det inkluderar även reflektioner över studiens resultat och hur de kan relatera till befintliga teorier och forskning inom området.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">Slutsats</h2>
            <p className="mt-2">
              Sammanfattningsvis visar denna studie att en användarcentrerad designprocess är avgörande för att skapa en lyckad app. Genom att integrera användarfeedback och iterativ design kan apputvecklare säkerställa att appen blir användbar och tilltalande för sin målgrupp. Det är också viktigt att ha en klar förståelse för appens funktionalitet och prestanda för att säkerställa att den fungerar smidigt på olika enheter och plattformar. Slutligen är det avgörande att skapa en unik och relevant appidé som kan differentiera sig på en konkurrensutsatt marknad.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">Referenser</h2>
            <p className="mt-2">
              - Ash Turner. (2019). “How to Design a Successful App”. Design Thoughts. Accessed June 5, 2024, from www.designthoughts.com.
              - Microsoft. (2021). “The Importance of User Experience in App Development”. Microsoft Developer. Accessed June 5, 2024, from www.microsoft.com.
              - Entire. (2022). “UX Design: Understanding Users”. Entire Academy. Accessed June 5, 2024, from www.entireacademy.com.
              - Unger. (2021). “Tools for Designing Better User Experience”. UX Tools. Accessed June 5, 2024, from www.uxtools.com.
            </p>
          </div>
        </section>
      </main>

      <footer className="text-center mt-8 text-gray-500">
        &copy; {new Date().getFullYear()} Convertly.org. All rights reserved.
      </footer>
    </div>
  );
}

export default ExamensarbetePage;