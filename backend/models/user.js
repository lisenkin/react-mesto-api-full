const validator = require('validator');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const UnauthorizedErr = require('../errors/UnauthorizedErr');
// извиняюсь, почему-то на ревью ушла не финальная версия с гита :(

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    default: 'Жак-Ив Кусто',
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    default: 'Исследователь',
  },
  // и снова дорогой Жак Ив Кусто
  avatar: {
    type: String,
    default: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
    validate: {
      validator: (link) => /^(https?:\/\/)?([\w-]+\.[\w-]+)\S*$/.test(link),
      message: 'Некорректная ссылка',
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email) => validator.isEmail(email),
      message: 'Некорректный адрес электроной почты',
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

// проверка  на 401 (я извиняюсь за косяки в предыдущей версии,
// половина правок почему-то не залились на гит

userSchema.statics.findUserByCredentials = function (email, password) { // eslint-disable-line
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new UnauthorizedErr('Неправильная почта или пароль'));
      }

      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new UnauthorizedErr('Неправильная почта или пароль'));
          }
          return user;
        });
    });
};

module.exports = mongoose.model('users', userSchema);
