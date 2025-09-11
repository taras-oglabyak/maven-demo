const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

const task = () => {
  core.notice('From JS');
  core.warn('warn?');

};

task();


