
<template>
	<div class="home">
		<div class="switch-list">
			<div class="switch-block" v-for="(item, index) in btList" :key="index">
				<div class="text">{{ item.name }}</div>
				<div class="sw">
					<el-switch v-model="item.status" @change="changeBT(index)" />
				</div>
			</div>
		</div>
		{{ btList.value }}
	</div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

let btList = ref([
	{
		name: "低月租",
		status: true,
	},
	{
		name: "大流量",
		status: true,
	},
	{
		name: "长期",
		status: false,
	},
]);

const getRandomExcluding = (length: number, filterIndex: number) => {
	// 生成一个从 0 到 length-1 的数组
	const arr = Array.from({ length }, (_, i) => i);

	// 从数组中移除 filterIndex
	const filteredArr = arr.filter((index) => index !== filterIndex);

	// 从剩下的数组中随机选择一个数
	const randomIndex = Math.floor(Math.random() * filteredArr.length);

	return filteredArr[randomIndex];
};
const changeBT = (index: any) => {
	console.info(btList.value);

	let Allselect =
		btList.value.filter((el) => el.status == true).length ==
		btList.value.length;
	if (Allselect) {
		console.info("全部选上了，应该排除掉", index);

        btList.value[getRandomExcluding(btList.value.length, index)].status = false

        console.info(btList.value)

	} else {
		console.info("还没完全选 不管");
	}
};
</script>
<style lang="scss" scoped>
.switch-list {
	display: flex;
	justify-content: center;
	flex-direction: column;
	.switch-block {
		display: flex;
		justify-content: center;
		align-items: center;
		.text {
			margin-right: 10px;
		}
	}
}
</style>
