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

const rippleElements =
  document.querySelectorAll('.ripple')

rippleElements.forEach((element) => {

  element.addEventListener('click', function (e) {

    const circle =
      document.createElement('span')

    const diameter = Math.max(
      this.clientWidth,
      this.clientHeight
    )

    const radius = diameter / 2

    circle.style.width = `${diameter}px`
    circle.style.height = `${diameter}px`

    circle.style.left =
      `${e.clientX - this.offsetLeft - radius}px`

    circle.style.top =
      `${e.clientY - this.offsetTop - radius}px`

    circle.classList.add('wave')

    const oldWave =
      this.querySelector('.wave')

    if (oldWave) {
      oldWave.remove()
    }

    this.appendChild(circle)

  })

})