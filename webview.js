'use strict';

const path = require('path');
const theme = require('./theme');

module.exports = Franz => {
  const getMessages = function getMessages() {
    const elements = document.querySelectorAll('.CxUIE, .unread');
    let count = 0;

    for (let i = 0; i < elements.length; i += 1) {
      if (elements[i].querySelectorAll('*[data-icon="muted"]').length === 0) {
        count += 1;
      }
    }

    // set Franz badge
    Franz.setBadge(count);
  };

  // inject franz.css stylesheet
  Franz.injectCSS(path.join(__dirname, 'service.css'));
  
  theme('darkTheme');

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndoYXRzYXBwL3dlYnZpZXcuanMiXSwibmFtZXMiOlsicGF0aCIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiRnJhbnoiLCJnZXRNZXNzYWdlcyIsImVsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY291bnQiLCJpIiwibGVuZ3RoIiwic2V0QmFkZ2UiLCJpbmplY3RDU1MiLCJqb2luIiwiX19kaXJuYW1lIiwibG9vcCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjs7QUFFQUMsT0FBT0MsT0FBUCxHQUFrQkMsS0FBRCxJQUFXO0FBQzFCLFFBQU1DLGNBQWMsU0FBU0EsV0FBVCxHQUF1QjtBQUN6QyxVQUFNQyxXQUFXQyxTQUFTQyxnQkFBVCxDQUEwQixpQkFBMUIsQ0FBakI7QUFDQSxRQUFJQyxRQUFRLENBQVo7O0FBRUEsU0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlKLFNBQVNLLE1BQTdCLEVBQXFDRCxLQUFLLENBQTFDLEVBQTZDO0FBQzNDLFVBQUlKLFNBQVNJLENBQVQsRUFBWUYsZ0JBQVosQ0FBNkIsc0JBQTdCLEVBQXFERyxNQUFyRCxLQUFnRSxDQUFwRSxFQUF1RTtBQUNyRUYsaUJBQVMsQ0FBVDtBQUNEO0FBQ0Y7O0FBRUQ7QUFDQUwsVUFBTVEsUUFBTixDQUFlSCxLQUFmO0FBQ0QsR0FaRDs7QUFjQTtBQUNBTCxRQUFNUyxTQUFOLENBQWdCYixLQUFLYyxJQUFMLENBQVVDLFNBQVYsRUFBcUIsYUFBckIsQ0FBaEI7O0FBRUE7QUFDQVgsUUFBTVksSUFBTixDQUFXWCxXQUFYO0FBQ0QsQ0FwQkQiLCJmaWxlIjoid2hhdHNhcHAvd2Vidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKEZyYW56KSA9PiB7XG4gIGNvbnN0IGdldE1lc3NhZ2VzID0gZnVuY3Rpb24gZ2V0TWVzc2FnZXMoKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuQ3hVSUUsIC51bnJlYWQnKTtcbiAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGVsZW1lbnRzW2ldLnF1ZXJ5U2VsZWN0b3JBbGwoJypbZGF0YS1pY29uPVwibXV0ZWRcIl0nKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY291bnQgKz0gMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBzZXQgRnJhbnogYmFkZ2VcbiAgICBGcmFuei5zZXRCYWRnZShjb3VudCk7XG4gIH07XG5cbiAgLy8gaW5qZWN0IGZyYW56LmNzcyBzdHlsZXNoZWV0XG4gIEZyYW56LmluamVjdENTUyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnc2VydmljZS5jc3MnKSk7XG5cbiAgLy8gY2hlY2sgZm9yIG5ldyBtZXNzYWdlcyBldmVyeSBzZWNvbmQgYW5kIHVwZGF0ZSBGcmFueiBiYWRnZVxuICBGcmFuei5sb29wKGdldE1lc3NhZ2VzKTtcbn07XG4iXX0=