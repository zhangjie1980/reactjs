/**
 * Created by zhangjie on 16/8/1.
 */

/**
 * 1.在React中,数据的流向是单向的（从父节点传递到子节点）,如果顶层组建的某个prop改变了,
 *   那么React会递归地向下遍历整棵组建树,重新渲染所有使用这个属性的组建。
 *
 * 2.setProps接口不再使用(0.15版本废弃)
 *
 * 3.
 */

const styles = {
    father: {
        height: 500,
        width: 500,
        backgroundColor: 'red',
        color: 'white',
    },

    son: {
        height: 300,
        width: 300,
        backgroundColor: 'blue',
        color: 'white',
    }
};


var PropsSon = React.createClass({

    getDefaultProps() {
        return {
            son_name: '雨墨',
        }
    },

    render() {
        console.log("PropsSon props => ");
        console.log(this.props);
        return (
            <div style={styles.son}>
                <h1>PropsSon</h1>
                <h1>Son name = {this.props.family}{this.props.son_name}</h1>
            </div>
        )
    }
});

var PropsFather = React.createClass({

    handleClick() {
        var family = ReactDOM.findDOMNode(this.refs.input).value;
        this.setState({
            family: family,
        });
    },

    getDefaultProps() {
        return {
            father_name: '杰',
            father_age: 36
        }
    },

    getInitialState() {
        return {
            family: this.props.family,
        }
    },

    render() {
        console.log("PropsFather props => ");
        console.log(this.props);
        return (
            <div style={styles.father}>
                <input ref="input" placeholder="修改姓氏"></input>
                <button onClick={this.handleClick}>修改</button>
                <h1>PropsFather</h1>
                <h1>Father name = {this.state.family}{this.props.father_name}</h1>
                <PropsSon family={this.state.family}/>
            </div>
        )
    }
});


ReactDOM.render(
    <div>
        <PropsFather family="张"/>
    </div>,
    document.getElementById('container')
);
