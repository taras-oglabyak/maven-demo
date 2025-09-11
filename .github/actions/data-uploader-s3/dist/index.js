const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

const task = () => {
  core.notice('From JS');
  const srakaInput = core.getInput('sraka');
  core.info(`input sraka is actually: ${srakaInput}`);

};

task();


