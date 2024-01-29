//обработка линейных шкал прогресса (темы, видео,тесты, вопросы)
function allLinearProgressesHandler(){
    const levelItems = document.querySelectorAll('.speed-run-theme__info-level-item')

    levelItems.forEach((elem)=>{
        const progressBarWrapper = elem.querySelector('.progress-bar-wrapper')
        const progressBar = elem.querySelector('.progress-bar')
        const fullProgress = Number(elem.querySelector('.full-progress').textContent)
        const currentProgress = Number(elem.querySelector('.current-progress').textContent)

        const percentOfWidthBlock =  (progressBarWrapper.offsetWidth - 8) / 100 //делим длину блока на проценты
        const percentOfFullProgress = fullProgress / 100 // делим полное число на 100
        const percentOfСurrentProgress = currentProgress / percentOfFullProgress // соотношение 1% от полного блока к текущему числу
        const currentWidthOfBlock = percentOfСurrentProgress * percentOfWidthBlock // связь процента и длины блока
        progressBar.style.width =  `${currentWidthOfBlock}px`
    })
}

//обработка кругового прогрессбара блоков
function roundProgressHandler(){
    const roundProgress = document.querySelector('.round-progress')

    const circle = roundProgress.querySelector('.round-progress-circle')
    const percent = Number(roundProgress.querySelector('.round-progress-percent').textContent.split('%')[0])
    const radius = circle.r.baseVal.value
    const circumference = 2 * Math.PI * radius //длина окружности

    circle.style.strokeDasharray = `${circumference} ${circumference}`
    circle.style.strokeDashoffset = circumference

    const offset = circumference - percent/100 * circumference
    circle.style.strokeDashoffset = offset - 3

}

allLinearProgressesHandler()
roundProgressHandler()