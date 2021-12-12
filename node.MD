<!--
 * @Author: ldm
 * @Date: 2021-12-12 04:20:35
 * @LastEditors: ldm
 * @LastEditTime: 2021-12-12 04:21:57
 * @Description: 学习笔记
-->
当node端口被占用时可以使用 netstat -o -n -a | findstr :3000 检查到被占用的进程id例如 TCP    0.0.0.0:1995           0.0.0.0:0              LISTENING       22964 的22964  
 taskkill /F /PID 22964 即可结束进程