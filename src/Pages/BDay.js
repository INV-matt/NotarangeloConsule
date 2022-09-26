import {BDCard} from "../Components/Card";

const BDay = ({ s_screen }) => {
    const birthdays = [
        [
            {
                'name': 'Sonia',
                'date': '04/01'
            },
            {
                'name': 'Paola',
                'date': '31/01'
            }
        ],
        [
            {
                'name': 'Francesco',
                'date': '03/02'
            }
        ],
        [
            {
                'name': 'Jashkarn',
                'date': '02/03'
            }
        ],
        [
            {
                'name': 'Buona Ventura',
                'date': '03/04'
            },
            {
                'name': 'Marta M.',
                'date': '16/04'
            },
            {
                'name': 'Alessandra',
                'date': '27/04'
            },
        ],
        [
            {
                'name': 'Michele',
                'date': '10/05'
            },
            {
                'name': 'Marta R.',
                'date': '15/05'
            },
            {
                'name': 'Filippo',
                'date': '18/05'
            },        {
                'name': 'Giorgia R.',
                'date': '29/05'
            },
        ],
        [],
        [
            {
                'name': 'Marco',
                'date': '08/07'
            },
            {
                'name': 'Joe',
                'date': '14/07'
            },
            {
                'name': 'Lorenzo',
                'date': '16/07'
            },
            {
                'name': 'Yousef',
                'date': '20/07'
            },
        ],
        [
            {
                'name': 'Dorotea',
                'date': '05/08'
            },        {
                'name': 'Pietro',
                'date': '08/08'
            },
        ],
        [
            {
                'name': 'Giulia T.',
                'date': '12/09'
            },
            {
                'name': 'Giorgia G.',
                'date': '14/09'
            },
            {
                'name': 'Jacopo',
                'date': '15/09'
            },
            {
                'name': 'Giulia F.',
                'date': '30/09'
            },
        ],
        [
            {
                'name': 'Marion',
                'date': '20/10'
            },
            {
                'name': 'Tommaso',
                'date': '21/10'
            },
        ],
        [
            {
                'name': 'Emma',
                'date': '01/11'
            },
            {
                'name': 'Margherita',
                'date': '01/11'
            },
            {
                'name': 'Carlotta',
                'date': '03/11'
            },
            {
                'name': 'Zoe',
                'date': '13/11'
            },
        ],
        [
            {
                'name': 'Valentina',
                'date': '21/12'
            },
        ]
    ]  //2d array, each array is a month, inside the birthdays are ordered 


    let _d = new Date();
    let _b = birthdays[_d.getMonth()];

    let noBDays = <p className="b_name">Nessun compleanno questo mese</p>

    
    /*const MonthBD = () => {
        let _;
        _b.forEach(p => {
            _ += <Card name={p.name} date={p.date} />
        });
        return _;
    }*/

    return (
    <div className={s_screen ? "s_b_container fl-dr-column" : "b_container"}>
        {
            _b.length !== 0 ? _b.map(_ => <BDCard name={_.name} date={_.date} key={_.id} small={s_screen} />) : noBDays
        }
    </div>
    );
}
 
export default BDay;