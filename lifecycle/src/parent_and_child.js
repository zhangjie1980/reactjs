/**
 * Created by zhangjie on 16/7/30.
 */

var Child = React.createClass({
    
    getDefaultProps() {
        return {
            name: 'zhangjie'
        }
    },
    
    render() {
        return (
            <div>
                这是子组件  {this.props.name}
            </div>
        );
    }
    
});

var Parent = React.createClass({
    
    render() {
        return (
            <div>
                <span>这是父组件</span>
                <Child name="jie ge"/>
                <Child name={this.props.name}/>
            </div>
        );
    }
});

var component = ReactDOM.render(
    <div>
        <Parent name="ceshi"/>
    </div>,
    document.getElementById('ParentAndChild')
);

