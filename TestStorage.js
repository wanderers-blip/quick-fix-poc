import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, AsyncStorage } from 'react-native';


export default class TestPages extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '啥也没有',
        }
    }
    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.text}>
                    {this.state.text}
                </Text>

                {/* 增加 */}
                <TouchableOpacity style={styles.touch} onPress={() => {
                    AsyncStorage.setItem('text', '葫芦小金刚', (error) => {
                        error ? this.setState({ text: '增加失败' }) : this.setState({ text: '增加成功' })
                    })
                }}>
                    <Text>增加</Text>
                </TouchableOpacity>
                {/* 删除 */}
                <TouchableOpacity style={styles.touch} onPress={() => {
                    AsyncStorage.removeItem('text',(error)=>{
                        error ? this.setState({ text: '删除失败' }) : this.setState({ text: '删除成功' })
                    })
                }}>
                    <Text>删除</Text>
                </TouchableOpacity>
                {/* 更改 */}
                <TouchableOpacity style={styles.touch} onPress={() => {
                    AsyncStorage.setItem('text', '爷爷',(error)=>{
                        error ? this.setState({ text: '更改失败' }) : this.setState({ text: '更改成功' })
                    })
                }}>
                    <Text>更改</Text>
                </TouchableOpacity>
                {/* 查询 */}
                <TouchableOpacity style={styles.touch} onPress={() => {
                    AsyncStorage.getItem('text').then((value) => {
                        if (value) {
                            this.setState({
                                text: value,
                            })
                        }else{
                            this.setState({
                                text:'啥也没存'
                            })
                        }
                    })
                }}>
                    <Text>查询</Text>
                </TouchableOpacity>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
    },
    touch: {
        width: 100,
        height: 50,
        marginTop:50,
        backgroundColor: '#0f0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    touchText: {
        fontSize: 20,
        color: '#000',
    }
});


