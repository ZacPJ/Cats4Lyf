"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StoreCats = StoreCats;
exports.catBigStore = exports.cat = void 0;

var _catNames = require("cat-names");

var _faker = require("@faker-js/faker");

var _react = require("react");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function randomSex() {
  var sexnum = Math.ceil(Math.random() * 2);

  if (sexnum === 1) {
    return "Male";
  } else if (sexnum === 2) {
    return "Female";
  }
}

function randomAge(upperAge) {
  return Math.ceil(Math.random() * upperAge);
}

function randomPrice() {
  var priceA = Math.ceil(Math.random() * Math.ceil(Math.random() * 100) * 20);

  while (priceA <= 100) {
    priceA = Math.ceil(Math.random() * Math.ceil(Math.random() * 100) * 20);
  }

  var priceB = Math.round(Math.random() * 100) / 100;
  return priceA + priceB;
}

var cat = {
  imgURL: "",
  name: "",
  sex: "",
  breed: "",
  location: "",
  age: "",
  price: "",
  basket: false,
  adjectives: {
    adj1: "",
    adj2: "",
    adj3: ""
  }
};
exports.cat = cat;
var catBigStore = []; // unused as of now

exports.catBigStore = catBigStore;
var unfilteredData = [];
var filteredData = [];
var url = "https://api.thecatapi.com/v1/breeds";
var api_key = "72eb923a-6495-4792-821c-9f163794b194";

function StoreCats() {
  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      storedCat = _useState2[0],
      setCat = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  (0, _react.useEffect)(function () {
    var fetchCat = function fetchCat() {
      var response, data;
      return regeneratorRuntime.async(function fetchCat$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return regeneratorRuntime.awrap(fetch(url, {
                headers: {
                  'x-api-key': api_key
                }
              }));

            case 3:
              response = _context.sent;

              if (response.ok) {
                _context.next = 6;
                break;
              }

              throw new Error(response.statusText);

            case 6:
              _context.next = 8;
              return regeneratorRuntime.awrap(response.json());

            case 8:
              data = _context.sent;
              setCat(data);
              console.log(data);
              unfilteredData = _toConsumableArray(storedCat);
              console.log(unfilteredData);
              /*for(let i = 0; i>20;i++){
                  if (unfilteredData[i].image.url === ""){
                      unfilteredData.splice(i,1)
                  }else{
                      filteredData.push(unfilteredData[i])
                  }
              }*/

              filteredData = unfilteredData;
              console.log(filteredData); //for(let i = 0; i>10;i++){

              cat.imgURL = filteredData[0];
              cat.name = (0, _catNames.random)();
              cat.sex = randomSex;
              cat.breed = filteredData;
              cat.location = _faker.faker.address.city; //cat.age = randomAge(parseInt(filteredData.life_span.split("-")[1]))

              exports.catBigStore = catBigStore = catBigStore + cat; // }

              _context.next = 27;
              break;

            case 23:
              _context.prev = 23;
              _context.t0 = _context["catch"](0);
              setError('Could not fetch data');
              console.log(_context.t0.message);

            case 27:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 23]]);
    };

    fetchCat();
  }, []);
}