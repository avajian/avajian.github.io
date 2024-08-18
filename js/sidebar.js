
document.getElementById('sidebar-toggle').addEventListener('click', function() {
    var sidebar = document.querySelector('.sidebar');
    var content = document.querySelector('.content');
    var content2 = document.querySelector('.content2');

    sidebar.classList.toggle('closed');
    content.classList.toggle('centered');
    content2.classList.toggle('centered');
  });