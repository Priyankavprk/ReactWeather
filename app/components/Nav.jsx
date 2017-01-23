let React = require('react')
let {Link, IndexLink} = require('react-router')

let Nav = (props) => {
    return (
      <div>
        <h2>nav component</h2>
          <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight:'bold'}}>Get weather</IndexLink>
          <Link to='/about' activeClassName='active' activeStyle={{fontWeight:'bold'}}>About</Link>
          <Link to='/examples' activeClassName='active' activeStyle={{fontWeight:'bold'}}>Examples</Link>
      </div>
    )
}

module.exports = Nav
