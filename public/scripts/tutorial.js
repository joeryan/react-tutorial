// tutorial.js
var CommentBox = React.createClass({
  render: function() {
    return (
      <div classname="CommentBox">
        Hello out there! I am a CommentBox!
      </div>
    );
  };
});
ReactDOM.render(
  <CommentBox />
  document.getElementById('content')
);
