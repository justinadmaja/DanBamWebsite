$(function(){
var slides = $('.slide')
    slides.hide()
    var currIndex = 0
    var minIndex = 0
    var maxIndex = slides.length - 1

    slides.eq(0).show()
    $('#slide-left').click(()=>{
        slides.eq(currIndex).hide()
        currIndex -=1
        if (currIndex<minIndex)
        {
            currIndex = maxIndex
        }
        slides.eq(currIndex).fadeIn()
    })
    $('#slide-right').click(()=>{
        slides.eq(currIndex).hide()
        currIndex +=1
        if (currIndex>maxIndex)
        {
            currIndex = minIndex
        }
        slides.eq(currIndex).fadeIn()
    })
})

function clickfunc()
{
    alert("Order has been received. Please wait for your order to come!!")
}
