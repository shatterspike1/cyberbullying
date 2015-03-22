var Page = React.createClass({
    
    getInitialState: function() {
        return {page: null}
    },
    
    render: function () {
        
        //console.log("Page props: ", this.props)
        //console.log("Page state: ", this.state)
        
        // props and state may be identical, this may be unecessary
        var page = (this.state.page) ? this.state.page : this.props.page
        
        if(page) {
            
            // generate array of comments
            var comments = []
            var i = 1
            while( page["user_id_"+i] || page["comment_"+i] || page["creation_time_"+i] ) {
                var uid = page["user_id_"+i]
                var cmt = page["comment_"+i]
                var crt = page["creation_time_"+i]
                comments.push({ "uid": uid, "cmt":cmt, "crt":crt })
                i++
            }
            //console.log("Comments: ", comments)
            
            return (
                <div className="pageView">
                    <h5 className="pageOwnerId">
                        <b>
                            {"User: "}
                        </b>
                        {page.profile_owner_id}
                    </h5>
                    <h5 className="pageLikes">
                        <b>
                            {"Likes: "}
                        </b>
                        {page.likes}
                    </h5>
                    <h5 className="pageCaption">
                        <b>
                            {"Caption: "}
                        </b>
                        {page.owner_caption}
                        {"\n(" + page.caption_time + ")."}
                    </h5>
                    <div className="pageImage">
                        <h5>
                            <b>
                                {"Image: "}
                            </b>
                        </h5>
                        <img src={page.image_url}></img>
                    </div>
                    <div className="pageComments">
                        <h5 className="pageLikes">
                            <b>
                                {"Comments: "}
                            </b>
                            {comments}
                        </h5>
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
