$(document).ready(function(){
    React.render(
        <Overview url = 'data/cyberbullying_data.json.data' Survey store = 'data/survey_responses.json' />,
        document.getElementById('content')
    )
})
