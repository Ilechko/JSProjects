window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById('header').style.padding = '2vw 2vw'
    document.getElementById('header').style.background =
      'var(--turquoise, aqua)'
    // document.getElementById("header").style.backdropFilter = "blur(8px)";
    // document.getElementById("header").style.marginBottom = "90px";
  } else {
    // document.getElementById("header").style.padding = "40px 10%";
    document.getElementById('header').style.background = 'none'
    document.getElementById('header').style.margin = '0'
    // document.getElementById("header").style.backdropFilter = "none";
    // document.getElementById("header").style.marginBottom = "10px";
  }
}

$(document).ready(function () {
  window.scrollTo(0, 0)
})



$(document).ready(function () {
  // Додавання коментарів
  $(document).on('click', '#add_comment', function () {
    let form = $("form[name='form']")
    form.css('display', 'block')
    $('#add_comment').replaceWith(form)
    $("textarea[name='comment']").focus()
  })

  $(document).on('click', "input[name='send']", function () {
    let comment = $("textarea[name='comment']").val()
    
    $(`<p class="comment">${comment}</p>`).appendTo('#comments')
    $("textarea[name='comment']").val('')
  })

  $(document).on('click', '#done', function () {
    let form = $("form[name='form']")
    form.css('display', 'none')
    $('#comments').after(
      '<a class="button" href="#" onclick="return false" id="add_comment">Добавити відгук</a>'
    )
  })

  // Приховування та показ коментарів
  function hideComments() {
    $('#comments').hide(1000, function () {
      $('#hide').hide()
      $('#show').show()
    })
  }

  function showComments() {
    $('#comments').show(1000, function () {
      $('#hide').show()
      $('#show').hide()
    })
  }

  $('#hide').on('click', hideComments)
  $('#show').on('click', showComments)
})
