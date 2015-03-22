var Page = React.createClass({
    
    getInitialState: function() {
        return {page: null}
    },
    
    // image tag width/height
    //style="width:640px;height:360px"
    
    render: function () {
        
        /*if(!this.state.page) {
            console.log("props: ", this.props)
            this.props.initPage()
        }*/
        
        console.log("Page props: ", this.props)
        console.log("Page state: ", this.state)
        
        // hard coded for testing
        var page = (this.state.page) ? this.state.page : this.props.page
        
        if(page) {
            return (
                <div className="pageView">
                    <h4 className="pageOwnerId">
                        {"User: " + page.profile_owner_id}
                    </h4>
                    <div className="pageImage">
                        <h4>{"Image: "}</h4>
                        <img src={page.image_url}></img>
                    </div>
                </div>
            )
        } else {
            return (
                <h2>No page data.</h2>
            )
        }
    }
})
