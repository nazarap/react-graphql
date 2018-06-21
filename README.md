# React+Relay+GraphQL

* [React](https://facebook.github.io/react/): Frontend framework for building user interfaces
* [Relay](https://facebook.github.io/relay/): Powerful GraphQL client developed by Facebook
* [Graphcool](https://www.graph.cool): Backend development framework based on GraphQL + Serverless

### Install dependencies & run locally

```sh
cd ..
yarn install
yarn relay # invoke relay compiler
yarn start # open http://localhost:3000 in your browser
```

### Watchman config
Since 4.6
```sh
$ watchman watch-del-all
$ watchman shutdown-server
```
Before 4.6
```sh
$ rm <STATEDIR>/state       # see above for what STATEDIR means
$ watchman --no-spawn --no-local shutdown-server
```

### GraphQL

[Endpoint https://api.graph.cool/relay/v1/cjhriygub1ujp0162c99ieakf](https://api.graph.cool/relay/v1/cjhriygub1ujp0162c99ieakf)

```sh
get-graphql-schema
https://api.graph.cool/relay/v1/cjhriygub1ujp0162c99ieakf >
./schema.graphql
```

## Next steps

* [Documentation](https://docs-next.graph.cool)
* [Advanced GraphQL features](https://www.graph.cool/docs/tutorials/advanced-features-eath7duf7d/)
* [Authentication & Permissions](https://www.graph.cool/docs/reference/authorization/overview-iegoo0heez/)
* [Implementing business logic with serverless functions](https://www.graph.cool/docs/reference/functions/overview-boo6uteemo/)
