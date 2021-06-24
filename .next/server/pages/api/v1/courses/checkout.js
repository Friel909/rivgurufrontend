module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ({

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lH2e");


/***/ }),

/***/ "4uXM":
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),

/***/ "BFcz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initMiddleware; });
// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
//
function initMiddleware(middleware) {
  return (req, res) => new Promise((resolve, reject) => {
    middleware(req, res, result => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

/***/ }),

/***/ "H2nC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const {
  Model
} = __webpack_require__("4uXM");

module.exports = (sequelize, Sequelize) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //     // define association here
    //     User.hasMany(models.Course, {
    //         foreignKey: 'userId'
    //     })
    // }
  }

  ;
  User.init({
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    isEmailPublic: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    },
    password: {
      type: Sequelize.STRING
    },
    designation: {
      type: Sequelize.TEXT
    },
    about: {
      type: Sequelize.TEXT
    },
    location: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    company: {
      type: Sequelize.STRING
    },
    companyUrl: {
      type: Sequelize.STRING
    },
    interests: {
      type: Sequelize.STRING
    },
    passwordResetToken: {
      type: Sequelize.UUID
    },
    passwordUpdatedAt: {
      type: Sequelize.DATE
    },
    emailResetToken: {
      type: Sequelize.UUID
    },
    profilePhoto: {
      type: Sequelize.STRING
    },
    gender: {
      type: Sequelize.STRING
    },
    fb_url: {
      type: Sequelize.STRING
    },
    tw_url: {
      type: Sequelize.STRING
    },
    insta_url: {
      type: Sequelize.STRING
    },
    in_url: {
      type: Sequelize.STRING
    },
    emailConfirmed: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    emailConfirmedAt: {
      type: Sequelize.DATE
    },
    as_teacher_apply: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    as_teacher_confirmed: {
      type: Sequelize.BOOLEAN
    },
    as_teacher_confirmed_at: {
      type: Sequelize.DATE
    },
    as_teacher_req_desc: {
      type: Sequelize.TEXT
    },
    role: {
      type: Sequelize.ENUM,
      values: ['student', 'admin', 'teacher'],
      defaultValue: 'student'
    },
    active: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    },
    agreedTerms: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'User'
  });
  return User;
};

/***/ }),

/***/ "Rc1n":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) { // main model file

var _user = _interopRequireDefault(__webpack_require__("H2nC"));

var _course = _interopRequireDefault(__webpack_require__("YNan"));

var _video = _interopRequireDefault(__webpack_require__("YZK/"));

var _enroled_courses = _interopRequireDefault(__webpack_require__("hYSW"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const fs = __webpack_require__("mw/K");

const path = __webpack_require__("oyvS");

const Sequelize = __webpack_require__("4uXM");

const basename = path.basename(__filename);
const env = "production" || false;

const config = __webpack_require__("vm/7")[env];

const db = {};
let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.users = (0, _user.default)(sequelize, Sequelize);
db.courses = (0, _course.default)(sequelize, Sequelize);
db.videos = (0, _video.default)(sequelize, Sequelize);
db.enroled_courses = (0, _enroled_courses.default)(sequelize, Sequelize); // hasMany relationshipt with user and course

db.users.hasMany(db.courses, {
  as: 'courses',
  foreignKey: 'userId'
});
db.courses.belongsTo(db.users, {
  foreignKey: 'userId',
  as: 'user'
}); // hasMany relationshipt with course and videos

db.courses.hasMany(db.videos, {
  as: 'videos',
  foreignKey: 'courseId'
});
db.videos.belongsTo(db.courses, {
  foreignKey: 'courseId',
  as: 'course'
}); // hasMany relationshipt with user and videos

db.users.hasMany(db.videos, {
  as: 'videos',
  foreignKey: 'userId'
});
db.videos.belongsTo(db.courses, {
  foreignKey: 'userId',
  as: 'user'
}); // hasMany relationshipt with course and enroled

db.courses.hasMany(db.enroled_courses, {
  as: 'enroled_courses',
  foreignKey: 'courseId'
});
db.enroled_courses.belongsTo(db.courses, {
  foreignKey: 'courseId',
  as: 'course'
}); // hasMany relationshipt with user and enroled

db.users.hasMany(db.enroled_courses, {
  as: 'enroled_courses',
  foreignKey: 'userId'
});
db.enroled_courses.belongsTo(db.users, {
  foreignKey: 'userId',
  as: 'user'
}); // console.log('######', db)

module.exports = db;
/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),

/***/ "Xm2/":
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "YNan":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const {
  Model
} = __webpack_require__("4uXM");

module.exports = (sequelize, Sequelize) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //     // define association here
    //     Course.belongsTo(models.User, {
    //         foreignKey: 'userId',
    //         onDelete: 'CASCADE'
    //     });
    // }
  }

  ;
  Course.init({
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING
    },
    overview: {
      type: Sequelize.TEXT
    },
    price: {
      type: Sequelize.FLOAT
    },
    free: {
      type: Sequelize.BOOLEAN
    },
    published: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    profilePhoto: {
      type: Sequelize.STRING
    },
    coverPhoto: {
      type: Sequelize.STRING
    },
    courese_preview_img: {
      type: Sequelize.STRING
    },
    course_preview_video: {
      type: Sequelize.STRING
    },
    duration: {
      type: Sequelize.STRING
    },
    duration: {
      type: Sequelize.STRING
    },
    lessons: {
      type: Sequelize.STRING
    },
    access: {
      type: Sequelize.STRING
    },
    category: {
      type: Sequelize.STRING
    },
    userId: {
      type: Sequelize.UUID,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
        as: 'userId'
      }
    }
  }, {
    sequelize,
    modelName: 'Course'
  });
  return Course;
};

/***/ }),

/***/ "YZK/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const {
  Model
} = __webpack_require__("4uXM");

module.exports = (sequelize, Sequelize) => {
  class Video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   // define association here
    // }
  }

  ;
  Video.init({
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    video_url: {
      type: Sequelize.TEXT
    },
    order: {
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    courseId: {
      type: Sequelize.UUID,
      onDelete: 'CASCADE',
      references: {
        model: 'Courses',
        key: 'id',
        as: 'courseId'
      }
    },
    userId: {
      type: Sequelize.UUID,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
        as: 'userId'
      }
    }
  }, {
    sequelize,
    modelName: 'Video'
  });
  return Video;
};

/***/ }),

/***/ "hYSW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const {
  Model
} = __webpack_require__("4uXM");

module.exports = (sequelize, Sequelize) => {
  class Enroled_courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {// define association here
    }

  }

  ;
  Enroled_courses.init({
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    payment_email: {
      type: Sequelize.STRING
    },
    cost: {
      type: Sequelize.INTEGER
    },
    courseId: {
      type: Sequelize.UUID,
      onDelete: 'CASCADE',
      references: {
        model: 'Courses',
        key: 'id',
        as: 'courseId'
      }
    },
    userId: {
      type: Sequelize.UUID,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
        as: 'userId'
      }
    }
  }, {
    sequelize,
    modelName: 'Enroled_courses'
  });
  return Enroled_courses;
};

/***/ }),

/***/ "kNaX":
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),

/***/ "lH2e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("usZV");
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("kNaX");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tMJi");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Xm2/");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_init_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("BFcz");
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Rc1n");
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_models_index__WEBPACK_IMPORTED_MODULE_5__);






const stripe = stripe__WEBPACK_IMPORTED_MODULE_0___default()("sk_test_51J10t7AfIZQz3G2o5nKjBCb29RflclhloTDNlJ630ndQYgU35GsPpij7KuYbHUYFVFay9Q2fdj5kWt98su0pg8Ry00buUNJMrg"); // Initialize the cors middleware

const cors = Object(_lib_init_middleware__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])( // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
cors__WEBPACK_IMPORTED_MODULE_3___default()({
  // Only allow requests with GET, POST and OPTIONS
  methods: ['GET', 'POST', 'OPTIONS', 'DELETE', 'PUT']
}));
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  await cors(req, res);

  if (!("authorization" in req.headers)) {
    return res.status(401).json({
      message: "No autorization token"
    });
  }

  const {
    paymentData
  } = req.body; // console.log(req.body)

  try {
    const {
      userId
    } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.verify(req.headers.authorization, "djhfghbdsgrasklkajsdgf");
    const prevCustomer = await stripe.customers.list({
      email: paymentData.email,
      limit: 1
    });
    const isExistingCustomer = prevCustomer.data.length > 0;
    let newCustomer;

    if (!isExistingCustomer) {
      newCustomer = await stripe.customers.create({
        email: paymentData.email,
        source: paymentData.id
      });
    }

    const customer = isExistingCustomer && prevCustomer.data[0].id || newCustomer.id;
    await stripe.charges.create({
      currency: "usd",
      amount: paymentData.stripeTotal,
      receipt_email: paymentData.email,
      customer,
      description: `Checkout | ${paymentData.email} | ${paymentData.id} | CourseID ${paymentData.courseId}`
    }, {
      idempotencyKey: Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])()
    });
    await _models_index__WEBPACK_IMPORTED_MODULE_5__["enroled_courses"].create({
      payment_email: paymentData.email,
      cost: paymentData.stripeTotal,
      userId: userId,
      courseId: paymentData.courseId
    });
    res.send("Checkout successful!");
  } catch (error) {
    console.error(error);
    res.send("Error proccessing charge");
  }
});

/***/ }),

/***/ "mw/K":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "tMJi":
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "usZV":
/***/ (function(module, exports) {

module.exports = require("stripe");

/***/ }),

/***/ "vm/7":
/***/ (function(module) {

module.exports = JSON.parse("{\"development\":{\"username\":\"postgres\",\"password\":\"\",\"database\":\"edemy_database_development\",\"host\":\"127.0.0.1\",\"dialect\":\"postgres\"},\"test\":{\"username\":\"user\",\"password\":\"password\",\"database\":\"edemy_database_test\",\"host\":\"127.0.0.1\",\"dialect\":\"postgres\"},\"production\":{\"username\":\"user\",\"password\":\"password\",\"database\":\"edemy_database_production\",\"host\":\"127.0.0.1\",\"dialect\":\"postgres\"}}");

/***/ })

/******/ });