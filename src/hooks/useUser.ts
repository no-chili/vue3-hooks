import { computed, ref } from "vue"
import { StorageSerializers, useStorage } from '@vueuse/core'
const user = useStorage('user', null, undefined, { serializer: StorageSerializers.object })

export const useUser = () => {

    const userModel = ref({
        userName: 'no-chili',
        password: 'no-chili'
    })

    const isLogined = computed(() => {
        return user.value?.id
    })

    const login = async () => {
        return user.value = { id: 1, userName: userModel.value.userName }
    }

    const logout = async () => {
        return user.value = null
    }

    return {
        userModel,
        user,
        login,
        logout,
        isLogined,
    }
}