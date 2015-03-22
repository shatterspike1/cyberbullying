$(document).ready(function(){
	React.render(
	    <Overview url = 'data/cyberbullying_data.csv' Survey store = 'data/survey_responses.json.data' Overview iter={0} />,
	    document.getElementById('content')
	)
})