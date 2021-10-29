This repo is to reproduce webpack cache broken by `rush install` using `pnpm link`

### environment

- node: >=12.13.0 & <13.0.0 || >=14.15.0 & <15.0.0

- rush: 5.54.0

  `npm install -g @microsoft/rush@5.54.0`

- pnpm: 6.7.1

  `npm install -g pnpm@6.7.1`
  
### reproduce steps

1. run `rush install` to install dependencies
2. run `rush build` first time, see the webpack build time without cache
3. run `rush build` second time, set the webpack build time with cache, only spend half time compare with first build.
4. run `rush install` again, this command wouldn't reinstall dependencies because of none changes of dependencies.
  but it will recreate a link of dependencies to node_module.
5. run `rush build` again, now will set webpack build time almost the same with first build, which is twice as long as
  second build.
