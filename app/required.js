global._ = require('lodash');
global.async = require('async');
global.request = require('request');
global.moment = require('moment-timezone');
global.cheerio = require('cheerio');
global.express = require('express');
global.mongoose = require('mongoose');
global.bodyparser = require('body-parser');

// https://attacomsian.com/blog/mongoose-schema-types
// https://www.tabnine.com/code/javascript/functions/mongoose/Schema/Types

global.PromptSchema = new mongoose.Schema({
    authorId: {type: mongoose.Schema.Types.ObjectId, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    thumb_url: {type: String, required: true},
    secret_prompt: {type: String, required: true},
    active: {type: Boolean, default: true},
    createdAt: {type: Date, default: Date.now}
});

global.UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    roles: [{ type: String }],
    active: {type: Boolean, default: true},
    prompts: [{type: mongoose.Schema.Types.ObjectId, ref: "Prompt"}],
    prompts_alt: [mongoose.Schema.Types.ObjectId],
    createdAt: {type: Date, default: Date.now}
});