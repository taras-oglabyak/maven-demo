const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

const task = () => {
  core.notice('From JS');

  const srakaInput = core.getInput('sraka', {required: true});
  core.notice(`input sraka is actually: ${srakaInput}`);

  core.setOutput('out-sraka', `res is ${srakaInput}`);

};

task();


