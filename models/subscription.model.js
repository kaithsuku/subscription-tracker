import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "subscription name is required"],
      trim: true,
      minLenght: 2,
      maxlenght: 100,
    },
    currency: {
      type: String,
      enum: ["USD", "INR"],
      default: "INR",
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price cannot be negative"],
    },
    frequency: {
      type: String,
      enum: ["daily", "weekly", "monthly", "yearly"],
    },
    paymentMethod: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["active", "cancelled", "expired"],
      default: "active",
    },
    category: {
      type: String,
      enum: ["sports", "news", "music", "movies", "tv", "entertainment"],
      required: true,
    },
    startDate: {
        type: Date,
        required: true,
        validate: {
            validator: (value) => value <= new Date(),
            message: "Start date must be in the past"
        }
    },
    renewalDate: {
        type: Date,
        validate: {
            validator: function (value) {
               return value > this.startDate
            },
            message: "Renewal date must be after start date"
            }  
    },
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
        index: true,
    }

  },
  { timestamps: true }
);

// Auto-calculate the renewal Date if missing

subscriptionSchema.pre('save', function (next) {
  console.log(this);
  
  if(!this.renewalDate) {
    console.log(this.frequency);
    
    const renewalPeriods = {
      daily: 1,
      weekly: 7,
      monthly: 30,
      yearly: 365,
    };

    this.renewalDate = new Date(this.startDate);
    this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency]);
  }

  // Auto-update the status if renewal date has passed
  if (this.renewalDate < new Date()) {
    this.status = 'expired';
  }

  next();
});


const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;

          
