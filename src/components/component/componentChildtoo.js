import React from 'react';
import PropTypes from 'prop-types';
class componentChildtoo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "我是另一个组件的title值"
        }

    }

    render() {
        return (
            <div style={{ "background": "green" }}>
                <p>我是另一个子组件</p>
                <div>
                    <p>组件传值的默认值;defaultProps=>{this.props.dp}</p>
                </div>
            </div>
        )
    }
}
componentChildtoo.defaultProps = {
    //默认字段
    dp: "不穿dp就是默认值"
}
componentChildtoo.propTypes = {
    //默认类型
    dp: PropTypes.string
}

export default componentChildtoo;