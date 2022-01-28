
export default function handler(req, res) {
    fetch('https://demo.fluentsupport.com/wp-json/fluent-support/v2/reports/agents-summary',{
        headers:{
            'Authorization': 'Basic ' + Buffer.from('anwar.hussen.pro@gmail.com' + ":" + 'octC ZFGd VNl9 v7uh v7We yCWg').toString('base64')
        }
    }).then(res => res.json()).then(data => {
        let interactions = 0;
        let responses = 0;
        data.summary.forEach( d => {
            interactions += Number(d?.stats?.interactions) ?? 0;
            responses += Number(d?.stats?.responses) ?? 0;
        })
        res.status(200).json({interactions,responses})
    })

}