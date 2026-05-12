const app = document.querySelector('#app')

const resumeData = {
  name:
    localStorage.getItem('name') ||
    'Николай Дуров',

  job:
    localStorage.getItem('job') ||
    'Математик и программист',

  about:
    localStorage.getItem('about') ||
    'Российский математик, программист и сооснователь Telegram. Известен своими работами в области криптографии, backend-разработки и высоконагруженных систем.'
}

app.innerHTML = `
  <div class="container">

    <button class="download-btn">
      Скачать PDF
    </button>

    <div class="resume ripple">

      <div class="top">

        <img
          src="./img/avatar.jpg"
          alt="avatar"
          class="avatar"
        >

        <div class="info">

          <h1
            contenteditable="true"
            id="name"
          >
            ${resumeData.name}
          </h1>

          <h2
            contenteditable="true"
            id="job"
          >
            ${resumeData.job}
          </h2>

        </div>

      </div>

      <div class="section ripple">

        <h3>Обо мне</h3>

        <p
          contenteditable="true"
          id="about"
        >
          ${resumeData.about}
        </p>

      </div>

      <div class="section ripple">

        <h3>Навыки</h3>

        <ul>

          <li contenteditable="true">
            Криптография
          </li>

          <li contenteditable="true">
            Backend-разработка
          </li>

          <li contenteditable="true">
            Высоконагруженные системы
          </li>

          <li contenteditable="true">
            Математика
          </li>

        </ul>

      </div>

      <div class="section ripple">

        <h3>Опыт работы</h3>

        <div class="card">

          <h4 contenteditable="true">
            Сооснователь Telegram
          </h4>

          <p contenteditable="true">
            2013 — настоящее время
          </p>

        </div>

      </div>

      <div class="section ripple">

        <h3>Образование</h3>

        <div class="card">

          <h4 contenteditable="true">
            СПбГУ
          </h4>

          <p contenteditable="true">
            Математика и программирование
          </p>

        </div>

      </div>

    </div>

  </div>
`

const editableElements =
  document.querySelectorAll('[contenteditable="true"]')

editableElements.forEach((element) => {

  element.addEventListener('input', () => {

    localStorage.setItem(
      element.id,
      element.innerText
    )

  })

})

const downloadButton =
  document.querySelector('.download-btn')

downloadButton.addEventListener('click', () => {

  window.print()

})

// ---- Исправленный ripple-эффект ----
const rippleElements =
  document.querySelectorAll('.ripple')

rippleElements.forEach((element) => {
  element.addEventListener('click', function (e) {
    // Удаляем предыдущую волну
    const oldWave = this.querySelector('.wave')
    if (oldWave) {
      oldWave.remove()
    }

    const circle = document.createElement('span')
    circle.classList.add('wave')

    // Получаем размеры и позицию элемента
    const rect = this.getBoundingClientRect()
    const offsetX = e.clientX - rect.left
    const offsetY = e.clientY - rect.top

    // Максимальное расстояние от точки клика до угла элемента
    const maxDist = Math.max(
      offsetX, rect.width - offsetX,
      offsetY, rect.height - offsetY
    )
    const size = maxDist * 2 // диаметр волны

    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.left = `${offsetX - size / 2}px`
    circle.style.top = `${offsetY - size / 2}px`

    this.appendChild(circle)
  })
})