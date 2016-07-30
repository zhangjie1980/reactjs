/**
 * Created by zhangjie on 16/7/30.
 */

var LifeCycle5 = React.createClass({
    
    /**
     * 0.只要定义了类,那么无论是否使用,都会被调用
     * 1.只会被调用一次
     * 2.属性如果是对象或者数组,那么是在所有实例中共享的
     * 3.如果设置了属性,必须返回,否则设置的属性无效
     * 4.如果通过父组件设置或者在ReactDOM.render方法中设置属性,那么会以集合的方式存储起来
     *
     * eg.
     * ReactDOM.render(
     *     <LifeCycle5 age="30"/>
     * )
     * getDefaultProps() {
     *     return {
     *         name: "zhangjie"
     *     }
     * )
     * Object {age: "30", name: "zhangjie"}
     *
     * 5.组件不允许修改自己的 props，只能通过父组件来修改。这是为了保持props的一致性。
     * 如果有需要自行修改的值，应该存在 this.state 中。,后续通过this.props来进行属性的访问操作
     * 不可修改是因为props是配置的意思,如果可以修改那么和state就没有区别了。
     * 6.porps的改变会触发render函数来更新页面
     */
    getDefaultProps: function() {
        console.log('LifeCycle5 getDefaultProps');
        var props = {
            name: 'zhangjie'
        };
        return props;
    },
    
    /**
     * 1.可以访问this.props
     * 2.必须有返回值,可以是null
     * 3.state可以在组件内改变,改变会引起UI的重绘
     */
    getInitialState() {
        console.log('LifeCycle5 getInitialState');
        console.log(this.props);
        return null;
    },
    
    /**
     * 1.首次渲染前被调用
     * 2.render方法前修改state的最后时机
     */
    componentWillMount() {
        console.log('LifeCycle5 componentWillMount');
    },
    
    /**
     * 1.这个方法是必须要实现的
     * 2.必须有返回值,并且返回值比如只有一个节点
     * 3.可以返回null或者false表示不需要渲染任何东西
     * 4.创建一个虚拟DOM(JS对象)
     * 5.必须纯粹,在这里不能修改state或者props,以及dom的输出(因为还没有真正的dom节点,只有在componentDidMount后才会有)
     */
    render() {
        console.log('LifeCycle5 render');
        return (
            <div ref="div">LifeCycle5</div>
        );
    },
    
    /**
     * 1.这个是已经可以在html中找到对应的dom元素了
     * 2.仅仅客户端有效,服务端无效
     * 3.可以通过ReactDOM.findDOMNode来获取dom节点
     * 4.如果想和其它 JavaScript 框架集成，使用 setTimeout 或者 setInterval
     *   来设置定时器，或者发送 AJAX 请求，可以在该方法中执行这些操作。
     */
    componentDidMount() {
        console.log('LifeCycle5 componentDidMount');
        console.log(ReactDOM.findDOMNode(this.refs.div));
    },
    
    componentWillReceiveProps() {
        console.log('LifeCycle5 componentWillReceiveProps');
    }

});

var TempComponent = React.createClass({
    getDefaultProps() {
        console.log('TempComponent getDefaultProps');
    },

    getInitialState() {
        console.log('TempComponent getInitialState');
        return null;
    },

    componentWillMount() {
        console.log('TempComponent componentWillMount');
    },

    render() {
        console.log('TempComponent render');
        return (
            <div>TempComponent</div>
        );
    },

    componentDidMount() {
        console.log('TempComponent componentDidMount');
    }
});

// class LifeCycle6 extends React.Component {
//
//     render() {
//         return (
//             <div>ES6 Hello World!!!</div>
//         );
//     }
// }

var info = {age: '10'};
ReactDOM.render(
    <div>
        <LifeCycle5 age={info}/>
        {/*<TempComponent />*/}
        <LifeCycle5 age="30" name="jie ge"/>
        {/*<LifeCycle5 />*/}
    </div>,
    document.getElementById('lifeCycle')
);

// info.age = '20';
// ReactDOM.render(
//     <div>
//         <LifeCycle5 age={info}/>
//         {/*<TempComponent />*/}
//         {/*<LifeCycle5 age="30" name="jie ge"/>*/}
//         {/*<LifeCycle5 />*/}
//     </div>,
//     document.getElementById('lifeCycle')
// );

