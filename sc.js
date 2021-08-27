const app = new Vue({
    el: "#app",
    data: {
        appName: "Open Chat",
        comments: {},
        userText: "",
        commentText: ""
        
    },
    methods: {
        downloadComments: function() {
            let db = firebase.database();
            let self = this
            db.ref("comments").once("value").then(function(obj) {
                self.comments = obj.val();
            });
        },
        uploadComments: function() {
            let db = firebase.database();
            db.ref("comments").set()
        },
        postComment: function(userText, commentText) {
            let db = firebase.database();
            db.ref("comments").push(
                {
                    "user": userText,
                    "content": commentText
                }
            )
            this.downloadComments()
        }
    }
})
app.downloadComments()