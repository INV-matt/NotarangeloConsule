import logo from "../imgs/dike_blk_bg.png";
import rick from "../imgs/rick.png";
import { QCard } from '../Components/Card';

const Home = ({s_screen}) => {

    const quotes = [
        {
            quote: "“Arriva il momento in cui bisogna scegliere tra ciò che è facile e ciò che è giusto.”",
            author: "Albus Percival Wulfric Brian Silente",
        },
        {
            quote: "“Tra vent'ann non sarete delusi dalle cose che avete fatto, ma da quelle che non avrete fatto. Allora levate l'ancora, abbandonate i porti sicuri, catturate il vento nelle vostre vele, esplorate, sognate, scoprite.”",
            author: "Mark Twain",
        },
        /*{
            quote: "“Time to conquer west Russia”",
            author: "Putin, probably",
        },*/
        {
            quote: "“Quando sei davanti a due decisioni, lancia in aria una moneta. Non perché farà la scelta giusta al posto tuo, ma perché nell'esatto momento in cui essa è in aria, saprai improvvisamente in cosa stai sperando di più.”",
            author: "Bob Marley",
        },
        {
            quote: "“All'inizio le battaglie, le vincono i falsi, perché sono troppo furbi. Ma la guerra la vince l'onesto, perché perservera nella pazienza e nella giustizia...”",
            author: "L. Valentinis",
        },
        {
            quote: "“Molti, dicendo cose giuste, fanno cose ingiuste.”",
            author: "Senofonte",
        },
        {
            quote: "“La pazienza, la perseveranza e il sudato lavoro creano un'imbattibile combinazione per il successo.”",
            author: "Napoleon Hill",
        },
        {
            quote: "“Non si fa il proprio dovere perché qualcuno ci dica grazie, lo si fa per principio, per se stessi, per la propria dignità.”",
            author: "Oriana Fallaci",
        },
        {
            quote: "“Sapere ciò che è giusto e non farlo è la peggiore vigliaccheria.”",
            author: "Confucio",
        },
        {
            quote: "“Se un uomo non è disponibile a correre qualche rischio per le proprie idee, o le sue idee non valgono nulla o è lui che non vale nulla.”",
            author: "Ezra Pound",
        },
        {
            quote: "“La scienza che si discosta dalla giustizia, più che scienza deve chiamarsi astuzia.”",
            author: "Marco Tullio Cicerone",
        },
       {
            quote: "I'm never going to give you up, never going to let you down, never going to run around and desert you, never going to make you cry, never going to say goodbye, never going to tell a lie and hurt you”",
            author: "Rick Astley",
        },
        /*{
            quote: "“”",
            author: "",
        },*/
    ]
    const idx = Math.floor(Math.random() * quotes.length);

    return (
        <div>
            { !s_screen && (
                    <div className="home">
                        <div className="img-container">
                            {quotes[idx].author !== "Rick Astley" && (<a href="https://media.tenor.com/2QeXf8sCPQ0AAAAC/godo.gif" /*href="https://youtu.be/QJJYpsA5tv8"*/ target="_blank" rel="noreferrer">
                                <img className="img" src={logo} alt=''/>
                            </a>)}
                            {quotes[idx].author === "Rick Astley" && (<a href="https://youtu.be/dQw4w9WgXcQ" target="_blank" rel="noreferrer">
                                <img className="img" src={rick} alt=''/>
                            </a>)}
                        </div>
                        <QCard quote={quotes[idx].quote} author={quotes[idx].author} />
                    </div>
                )
            }

            { s_screen && (
                    <div className="s_home">
                        
                        {quotes[idx].author !== "Rick Astley" && (<a href="https://media.tenor.com/2QeXf8sCPQ0AAAAC/godo.gif" target="_blank" rel="noreferrer">
                            <img className="img" src={logo} alt=''/>
                        </a>)}
                        {quotes[idx].author === "Rick Astley" && (<a href="https://youtu.be/dQw4w9WgXcQ" target="_blank" rel="noreferrer">
                            <img className="img" src={rick} alt=''/>
                        </a>)}
                        <QCard quote={quotes[idx].quote} author={quotes[idx].author} small />
                    </div>
                )
            }
        </div>
    );
}
 
export default Home;
