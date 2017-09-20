# mobx-multiple-instance-issue-sample

Install dependencies

`$ yarn install`

Then

`$ yarn start`

Should open a page in browser at localhost:3000, open the developer tools in chrome, notice the Mobx multiple-instances warning.

## Notes

I noticed if I replace all the usages of `yarn` with `npm` then the problem doesnt show itself. Is this a yarn issue? It looks like yarn is running some post-install commands in `/client` that `npm` doesnt?