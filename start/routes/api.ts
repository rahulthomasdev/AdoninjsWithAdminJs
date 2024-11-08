import router from '@adonisjs/core/services/router'

router.get('/about', ({response}) => {
    return response.status(201).send({
        message: 'OOPS'
    })
  })