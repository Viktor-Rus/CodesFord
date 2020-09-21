// const htmlCourse = [
//     {id: 1, title: 'Уроки по HTML. Часть 1. Введение в HTML.', description: 'Вводный урок по HTML. Из него мы узнаем, что же такое HTML, изучим структуру всех HTML-документов и изучим некоторые основные тэги.', source: '"https://www.youtube.com/embed/Shl_ulf8UBM'},
//     {id: 2, title: 'Уроки по HTML. Часть 2. Работа с текстом', description: 'Из этого урока вы узнаете основные тэги HTML для работы с текстом, а также познакомитесь с типами элементов и глобальными атрибутами.', source: 'https://www.youtube.com/embed/izQi4X4Ez9s'},
//     {id: 3, title: 'Уроки по HTML. Часть 3. Списки', description: 'В этом уроке мы разберем списки.Списком называется взаимосвязанный набор отдельных фраз или предложений, которые начинаются с маркера или цифры. Списки предоставляют возможность упорядочить и систематизировать разные данные и представить их в наглядном и удобном для пользователя виде.', source: 'https://www.youtube.com/embed/D_qItBXpqTk'}
// ]
//
// const toHTML = course => `
// <div class="col s12 m10">
//         <h4>${course.title}</h4>
//         <iframe  class="video-html" src=${course.source} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//         <div class="descr-lessons">${course.description}</div>
//       </div>
// `
// //
// // function renfer() {
// //     const html =htmlCourse.map
// //     document.querySelector('#cousies').innerHTML = html
// // }
// function logConsole() {
//     console.log('клик')
// }
// const el = document.querySelectorAll('selected');
//
// el.addEventListener("click", logConsole)


$('.video').on('click', function(e) {
    e.preventDefault(); // предотвращаем стандартное поведение ссылки
    var vid = $(this).attr('data-video'); // получаем id видео из атрибута
    var title = $(this).attr('data-title');// получаем заголовок видео из атрибута
    var descr = $(this).attr('data-descr');// получаем описание видео из атрибута
    $('.bigvideo iframe').attr('src', 'https://www.youtube.com/embed/' + vid); // и подставляем его в iframe
    var titleCours = document.getElementById("title-lesson");
    var descrCours = document.getElementById("descrLesson");
    titleCours.innerHTML = title;//подставляем заголово
    descrCours.innerHTML = descr;// подставлем описание
});


