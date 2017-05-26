var express = require('express')

var appData = express.Router();

var projectDetails = {
  '/1': {
    title: 'Stackbear',
    videoUrl:'testurl1',
    websiteUrl:'stackbear.co',
    description: 'description1'
  },
  '/2': {
    title: 'Space Stomp',
    videoUrl:'testurl2',
    description: 'description2'
  },
  '/3': {
    title: 'Poke 4 Dex',
    videoUrl:'testurl3',
    description: 'description3'
  },
  '/4': {
    title: 'Something New',
    videoUrl:'testurl4',
    description: 'description4'
  },

}

appData.get('/:id', (req, res)=>{
  res.status(200).json(projectDetails[req.url]);
})

module.exports = appData;