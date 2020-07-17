$('.page-scroll').on('click', function(event){

    let tujuan = $(this).attr('href')
    let elemenTujuan = $(tujuan)

    $('body').animate({
        scrollTop: elemenTujuan.offset().top - 48
    }, 500)

    event.preventDefault()
})