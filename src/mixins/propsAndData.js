export const propsAndData = {
    props: {
        configs: {
            type: Object,
            default: () => {
            }
        },
        sundayStart: {
            type: Boolean,
            default: () => false
        },
        placeholder: {
            type: [String, Boolean],
            default: () => false
        },
        dateFormat: {
            type: String,
            default: () => 'dd/mm/yyyy'
        },
        isMultiple: {
            type: Boolean,
            default: () => false
        },
        isDatePicker: {
            type: Boolean,
            default: () => false
        },
        isDateRange: {
            type: Boolean,
            default: () => false
        },
        calendarsCount: {
            type: Number,
            default: () => 1
        },
        isModal: {
            type: Boolean,
            default: () => false
        },
        isTypeable: {
            type: Boolean,
            default: () => false
        },
        changeMonthFunction: {
            type: Boolean,
            default: () => false
        },
        changeYearFunction: {
            type: Boolean,
            default: () => false
        },
        applyStylesheet: {
            type: Boolean,
            default: () => true
        },
        newCurrentDate: {
            type: Date,
            default: () => new Date()
        },
        markedDates: {
            type: Array,
            default: () => []
        },
        markedDateRange: {
            type: Object,
            default: () => {
                return {
                    start: false,
                    end: false
                }
            }
        },
        disabledDayNames: {
            type: Array,
            default: () => []
        },
        disabledDates: {
            type: Array,
            default: () => []
        },
        limits: {
            type: [Object, Boolean],
            default: () => false
        },
        dayNames: {
            type: Array,
            default: () => ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
        },
        monthNames: {
            type: Array,
            default: () => ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        },
        value: {
            type: Object
        },
        transition: {
            type: Boolean,
            default: () => true
        },
        hiddenElements: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            calendar: {
                currentDate: new Date(),
                selectedDate: false,
                dateRange: {
                    start: false,
                    end: false
                }
            },
            calendarsKey: 0,
            transitionPrefix: 'left',
            showCalendar: true,
            showMonthPicker: false,
            showYearPicker: false,
            allowPreDate: true,
            allowNextDate: true,
            input: {
                selectedDate: '',
                dateRange: {
                    start: '',
                    end: ''
                }
            },
            listCalendars: [],
            fConfigs: {
                sundayStart: false,
                placeholder: false,
                dateFormat: 'dd/mm/yyyy',

                isDatePicker: false,
                isDateRange: false,
                isMultiple: false,
                calendarsCount: 3,

                isModal: false,
                isTypeable: false,

                changeMonthFunction: false,
                changeYearFunction: false,

                applyStylesheet: true,

                markedDates: [],
                markedDateRange: {
                    start: false,
                    end: false
                },

                limits: false,

                disabledDates: [],
                disabledDayNames: [],

                dayNames: [],
                monthNames: [],

                transition: true,
                hiddenElements: []
            }
        }
    }
};
