<template>
    <div >
        <label >{{ label }}</label>
        <div >
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        props : {
            label: {
                // type: String,
                // default: ''
            }
        },
        data () {
            return {
                
            };
        }
    };
</script>
