document.write(`
<link rel="html" href="클럽">
<link rel="html" href="액티비티">
<div id="club_searchList">
  <form action="club_searchList">
    <select name="searchKey" id="searchKey">
      <option selected hidden>검색기준</option>
      <option value="club_name">모임명</option>
      <option value="club_leader">모임장</option>
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
  <div class="club_box">
    <a href="">
      <ul>
        <li><img src="club_img" alt="club_img" id="club_img"></li>
        <li>club_name</li>
        <li>club_wdate</li>
      </ul>
    </a>
  </div>
</div>
<style>
/* mypage_bootm */
#club_searchList form {
  padding: 20px 20px;
}
#club_searchList select, #club_searchList input {
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
#club_searchList li {
  display: inline-block;
  font-size: 18px;
  padding: 0px 10px;
  letter-spacing: 3px;
  position: absolute;
}
#club_searchList li:first-child {
  border-right: 3px solid gray;
  top: 25px;
  right: 90px;
}
#club_searchList li:last-child {
  top: 25px;
  right: 0px;
}
#club_searchList li {
  display: inline-block;
  font-size: 18px;
}
.club_box {
  display: inline-block;
  border: 1px solid gray;
  width: 200px;
  height: 235px;
  padding: 0px;
  margin: 5px;
}
#club_img {
  width: 200px;
  height: 200px;
}
.club_box {
  font-size: 15px;
}
</style>
`);