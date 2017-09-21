# mobx-multiple-instance-issue-sample

Install dependencies

`$ yarn install`

Then

`$ yarn start`

Should open a page in browser at localhost:3000, open the developer tools in chrome, notice the Mobx multiple-instances warning.

## Notes

I noticed if I replace all the usages of `yarn` with `npm` then the problem doesnt show itself. Is this a yarn issue? It looks like yarn is running some post-install commands in `/client` that `npm` doesnt?

## Solution

See branch `the_solution` (https://github.com/mikecann/mobx-multiple-instance-issue-sample/tree/the_solution) for how to fix this.

Full credit goes to @mweststrate https://github.com/mobxjs/mobx/issues/1082#issuecomment-331074896