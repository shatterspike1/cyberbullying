var Survey = React.createClass({ displayName: 'Survey',


    getInitialState: function() {
        return {page: null, selectValue1: "", selectValue2: "", yes1: 0, no1: 0, yes2: 0, no2: 0, store: 'data/survey_responses.json.data', iter: this.props.iter}
    },
    
    handleNextPage: function(event) {
        console.log("\nHandling Next Page\n")
        this.props.nextPage()
    },
    
    handleChange1: function(e){
        console.log("Question1 targetValue: ", e.target.value)
        this.setState({selectValue1:e.target.value})
        if (e.target.value == "Yes"){
            this.setState({yes1: 1})
            this.setState({no1: 0})
        }
        else if (e.target.value == "No"){
            this.setState({yes1: 0})
            this.setState({no1: 1})
        }
        else{
            this.setState({yes1: 0})
            this.setState({no1: 0})
        }
    },
    
    handleChange2: function(e){
        console.log("Question2 targetValue: ", e.target.value)
        this.setState({selectValue2:e.target.value})
        if (e.target.value == "Yes"){
            this.setState({yes2: 1})
            this.setState({no2: 0})
        }
        else if (e.target.value == "No"){
            this.setState({yes2: 0})
            this.setState({no2: 1})
        }
        else{
            this.setState({yes2: 0})
            this.setState({no2: 0})
        }
    },
    
    handleSubmit: function(e){
        e.preventDefault()
        console.log("Submit state: ",this.state)
        var y1 = this.state.yes1
        var n1 = this.state.no1
        var y2 = this.state.yes2
        var n2 = this.state.no2
        var it = this.state.iter
        var store = this.state.store
        var da
        
        $.ajax({
            type: "GET",
            url: store,
            dataType : 'json',
            success: function(data){
                da = data
                console.log("(GET) data[", it, "]: ", da[it])
                da[it].q1yes = da[it].q1yes + y1
                da[it].q1no = da[it].q1no + n1
                da[it].q2yes = da[it].q2yes + y2
                da[it].q2no = da[it].q2no + n2
                $.ajax({
                    type: "POST",
                    url: store,
                    dataType: 'json',
                    data: da[it],
                    success: function(){
                        console.log("(POST) data to post is:", da[it])
                    },
                    error: function(xhr, status, err) {
                        console.error(store, status, err.toString())
                    }
                })
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(store, status, err.toString())
            }.bind(this)
        });
        
        console.log("Iteration: ", this.state.iter)
        it++
        this.setState({iter: it})
        console.log("State after submit: ", this.state)
    },

    render: function(){
        return (
            <div className="survey">
                <div className="firstQuestion row">
                    <p>Is there any cyberaggressive behavior in the online posts? Mark yes if there is at least one negative word/comment and or content with intent to harm someone or others.</p>
                        <select value={this.state.selectValue1}  onChange={this.handleChange1}>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            <option value=""></option>
                        </select>
                </div>
                <div className="secondQuestion row">
                    <p>Is there any cyerbullying in the online post? Mark yes if there are negative words and or comment with intent to harm someone or other, and the posts include two or more repeated negativity against a victim that cannot easily defend him or herself</p>
                        <select value={this.state.selectValue2} onChange={this.handleChange2}>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            <option value=""></option>
                        </select>
                </div>
                <div className="next row">
                    <form className='nextButton' onSubmit={this.handleSubmit} onSubmit={this.props.handleNextPage}>
                    <input type='submit' value='Next'/>
                    </form>
                </div>
            </div>
        )
    }

})

