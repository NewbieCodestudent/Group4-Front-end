document.write(`
<link rel="html" href="클럽">
<link rel="html" href="액티비티">
<div id="activity_searchList">
  <form action="activity_searchList">
    <select name="searchKey" id="searchKey">
      <option selected hidden>검색기준</option>
      <option value="activity_name">모임명</option>
      <option value="activity_leader">모임장</option>
    </select>
    <input type="text" id="searchWord">
    <input type="submit" id="submit">
  </form>
  <ul>
    <li>최신순</li>
    <li>제목순</li>
  </ul>
</div>
<!-- c문 -->
<div style="margin: 0px 20px;">
  <div class="activity_box">
    <a href="">
      <ul>
        <li><img src="activity_img" alt="activity_img" id="activity_img"></li>
        <li>activity_name</li>
        <li>activity_wdate</li>
      </ul>
    </a>
  </div>
</div>
<style>
/* mypage_bootm */
#activity_searchList form {
  padding: 20px 20px;
}
#activity_searchList select, #activity_searchList input {
  font-size: 18px;
  height: 30px;
  border: 1px solid gray;
  border-radius: 5px;
}
#searchKey {
  width: 110px;
  margin-right: 5px;
}
#searchWord {
  width:350px;
}
#submit {
  background-color: rgb(196, 196, 206);
  color: black;
  letter-spacing: 3px;
}
#activity_searchList li {
  display: inline-block;
  font-size: 18px;
  padding: 0px 10px;
  letter-spacing: 3px;
  position: absolute;
}
#activity_searchList li:first-child {
  border-right: 3px solid gray;
  top: 25px;
  right: 90px;
}
#activity_searchList li:last-child {
  top: 25px;
  right: 0px;
}
#activity_searchList li {
  display: inline-block;
  font-size: 18px;
}
.activity_box {
  display: inline-block;
  border: 1px solid gray;
  width: 200px;
  height: 235px;
  padding: 0px;
  margin: 5px;
}
#activity_img {
  width: 200px;
  height: 200px;
}
.activity_box {
  font-size: 15px;
}
</style>
`);