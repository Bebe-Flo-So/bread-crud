const React = require('react')
const Default = require('./layouts/default')

function Index({ breads }) {
    const display = breads.map((bread, i) => {
        return (
            <li key= {1}>
        <a href={`/breads/${i}`}>{bread.name}</a>
        </li>
        )
    })

    return (
      <Default>
        <h2>Index Page</h2>
        <ul>
            {display}
        </ul>
      </Default>
    )
}

module.exports = Index